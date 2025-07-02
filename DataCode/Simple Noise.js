(function (Scratch) {
    'use strict';

    class NoiseGenerators {
        constructor() {
            // Общий seed для всех генераторов
            this.seed = Math.floor(Math.random() * 10000);
            
            // Worley Noise settings
            this.worleyNumPoints = 20;
            
            // Chebyshev Noise settings
            this.chebyshevGridSize = 20;
            
            // Fractal Noise settings
            this.fractalOctaves = 4;
            this.fractalPersistence = 0.5;
            
            // Генерация начальных данных
            this.generateWorleyPoints();
        }

        getInfo() {
            return {
                id: 'noisegenerators',
                name: 'Noise Generators',
                color1: '#4a6baf',
                color2: '#3a5a9f',
                blocks: [
                    {
                        opcode: 'setSeed',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set seed [SEED]',
                        arguments: {
                            SEED: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '12345'
                            }
                        }
                    },
                    {
                        opcode: 'setWorleyNumPoints',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set Worley points count to [NUM]',
                        arguments: {
                            NUM: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '20'
                            }
                        }
                    },
                    {
                        opcode: 'setChebyshevGridSize',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set Chebyshev grid size to [SIZE]',
                        arguments: {
                            SIZE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '20'
                            }
                        }
                    },
                    {
                        opcode: 'setFractalOctaves',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set Fractal octaves to [OCTAVES]',
                        arguments: {
                            OCTAVES: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '4'
                            }
                        }
                    },
                    {
                        opcode: 'setFractalPersistence',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set Fractal persistence to [PERSISTENCE]',
                        arguments: {
                            PERSISTENCE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0.5'
                            }
                        }
                    },
                    {
                        opcode: 'getFractalNoise2D',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Fractal noise 2D at x:[X] y:[Y]',
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    },
                    {
                        opcode: 'getFractalNoise1D',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Fractal noise 1D at [X]',
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    },
                    {
                        opcode: 'getChebyshevNoise2D',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Chebyshev noise at x:[X] y:[Y]',
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    },
                    {
                        opcode: 'getWorleyNoise2D',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Worley noise at x:[X] y:[Y]',
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '0'
                            }
                        }
                    }
                ]
            };
        }

        // Общий метод установки seed
        setSeed(args) {
            this.seed = Math.floor(args.SEED);
            this.generateWorleyPoints();
        }

        // Worley Noise methods
        setWorleyNumPoints(args) {
            this.worleyNumPoints = args.NUM;
            this.generateWorleyPoints();
        }

        generateWorleyPoints() {
            let seed = this.seed;
            const random = () => {
                const x = Math.sin(seed++) * 10000;
                return x - Math.floor(x);
            };

            this.worleyPoints = [];
            for (let i = 0; i < this.worleyNumPoints; i++) {
                this.worleyPoints.push({
                    x: random(),
                    y: random()
                });
            }
        }

        getWorleyNoise2D(args) {
            const x = args.X / 10;
            const y = args.Y / 10;
            let minDist = Infinity;

            for (const point of this.worleyPoints) {
                const dx = point.x - x;
                const dy = point.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minDist) minDist = dist;
            }

            return minDist;
        }

        // Chebyshev Noise methods
        setChebyshevGridSize(args) {
            this.chebyshevGridSize = Math.max(1, args.SIZE);
        }

        chebyshevGridRandom(cx, cy) {
            const x = cx * 4967 + cy * 7919 + this.seed * 6151;
            return {
                x: (Math.sin(x) * 12345) % 1,
                y: (Math.cos(x) * 54321) % 1
            };
        }

        getChebyshevNoise2D(args) {
            const x = args.X / 50.0;
            const y = args.Y / 50.0;
            
            const gridX = Math.floor(x);
            const gridY = Math.floor(y);
            
            const localX = x - gridX;
            const localY = y - gridY;
            
            let minDist = Infinity;
            
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    const point = this.chebyshevGridRandom(gridX + dx, gridY + dy);
                    
                    const px = (gridX + dx) + point.x;
                    const py = (gridY + dy) + point.y;
                    
                    const dist = Math.max(
                        Math.abs(px - x),
                        Math.abs(py - y)
                    );
                    
                    if (dist < minDist) {
                        minDist = dist;
                    }
                }
            }
            
            return minDist * this.chebyshevGridSize;
        }

        // Fractal Noise methods
        setFractalOctaves(args) {
            this.fractalOctaves = Math.max(1, args.OCTAVES);
        }

        setFractalPersistence(args) {
            this.fractalPersistence = Math.max(0, Math.min(1, args.PERSISTENCE));
        }

        getFractalNoise1D(args) {
            let total = 0;
            let frequency = 1;
            let amplitude = 1;
            let maxValue = 0;
            const x = args.X;

            for (let i = 0; i < this.fractalOctaves; i++) {
                total += this.fractalSimpleNoise1D(x * frequency) * amplitude;
                maxValue += amplitude;
                amplitude *= this.fractalPersistence;
                frequency *= 2;
            }

            return total / maxValue;
        }

        getFractalNoise2D(args) {
            let total = 0;
            let frequency = 1;
            let amplitude = 1;
            let maxValue = 0;
            const x = args.X;
            const y = args.Y;

            for (let i = 0; i < this.fractalOctaves; i++) {
                total += this.fractalSimpleNoise2D(x * frequency, y * frequency) * amplitude;
                maxValue += amplitude;
                amplitude *= this.fractalPersistence;
                frequency *= 2;
            }

            return total / maxValue;
        }

        fractalSimpleNoise1D(x) {
            const floorX = Math.floor(x);
            const t = x - floorX;
            const tRemap = t * t * (3 - 2 * t);
            
            const a = this.fractalRandom(floorX);
            const b = this.fractalRandom(floorX + 1);
            
            return this.fractalLerp(a, b, tRemap);
        }

        fractalSimpleNoise2D(x, y) {
            const floorX = Math.floor(x);
            const floorY = Math.floor(y);
            const tX = x - floorX;
            const tY = y - floorY;
            const tRemapX = tX * tX * (3 - 2 * tX);
            const tRemapY = tY * tY * (3 - 2 * tY);

            const a = this.fractalRandom(floorX, floorY);
            const b = this.fractalRandom(floorX + 1, floorY);
            const c = this.fractalRandom(floorX, floorY + 1);
            const d = this.fractalRandom(floorX + 1, floorY + 1);

            const lerp1 = this.fractalLerp(a, b, tRemapX);
            const lerp2 = this.fractalLerp(c, d, tRemapX);

            return this.fractalLerp(lerp1, lerp2, tRemapY);
        }

        fractalRandom(...args) {
            let value = 0;
            for (const arg of args) {
                value += arg * 1000;
            }
            value += this.seed * 1000;
            value = Math.sin(value) * 10000;
            return value - Math.floor(value);
        }

        fractalLerp(a, b, t) {
            return a + t * (b - a);
        }
    }

    // Register extension
    (async () => {
        const extension = new NoiseGenerators();
        Scratch.extensions.register(extension);
    })();
})(window.Scratch = window.Scratch || {});