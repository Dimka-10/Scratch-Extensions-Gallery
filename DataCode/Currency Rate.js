(function (Scratch) {
    'use strict';

    const cast = Scratch.Cast;

    class CurrencyExtension {
        getInfo() {
            return {
                id: 'currencyHistory',
                name: 'Курс валют',
                color1: '#4B8F8C',
                blocks: [
                    {
                        opcode: 'getCurrentRate',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'текущий курс USD к RUB'
                    },
                    {
                        opcode: 'getHistoricalRate',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'курс USD к RUB на дату [DATE]',
                        arguments: {
                            DATE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '01 01 2023'
                            }
                        }
                    }
                ]
            };
        }

        async getCurrentRate() {
            return this._fetchRate('latest');
        }

        async getHistoricalRate(args) {
            const dateString = cast.toString(args.DATE);
            return this._fetchRate(dateString);
        }

        async _fetchRate(dateParam) {
            try {
                let url;
                if (dateParam === 'latest') {
                    url = 'https://www.cbr-xml-daily.ru/daily_json.js';
                } else {
                    const [day, month, year] = dateParam.split(' ').map(Number);
                    if (!this._isValidDate(day, month, year)) {
                        return 'Неверная дата';
                    }
                    const date = new Date(year, month - 1, day);
                    const yyyy = date.getFullYear();
                    const mm = String(date.getMonth() + 1).padStart(2, '0');
                    const dd = String(date.getDate()).padStart(2, '0');
                    url = `https://www.cbr-xml-daily.ru/archive/${yyyy}/${mm}/${dd}/daily_json.js`;
                }

                const response = await Scratch.fetch(url);
                if (!response.ok) return 'Ошибка';

                const data = await response.json();
                const rate = data?.Valute?.USD?.Value;
                
                return rate ? Math.round(rate * 100) / 100 : 'Нет данных';
            } 
            catch (error) {
                console.error(error);
                return 'Ошибка';
            }
        }

        _isValidDate(day, month, year) {
            const date = new Date(year, month - 1, day);
            return (
                date.getFullYear() === year &&
                date.getMonth() === month - 1 &&
                date.getDate() === day
            );
        }
    }

    Scratch.extensions.register(new CurrencyExtension());
})(Scratch);