/*
   This extension was made with TurboBuilder!
   https://turbobuilder-steel.vercel.app/
*/
(async function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = [];


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    function doSound(ab, cd, runtime) {
        const audioEngine = runtime.audioEngine;

        const fetchAsArrayBufferWithTimeout = (url) =>
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                let timeout = setTimeout(() => {
                    xhr.abort();
                    reject(new Error("Timed out"));
                }, 5000);
                xhr.onload = () => {
                    clearTimeout(timeout);
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(new Error(`HTTP error ${xhr.status} while fetching ${url}`));
                    }
                };
                xhr.onerror = () => {
                    clearTimeout(timeout);
                    reject(new Error(`Failed to request ${url}`));
                };
                xhr.responseType = "arraybuffer";
                xhr.open("GET", url);
                xhr.send();
            });

        const soundPlayerCache = new Map();

        const decodeSoundPlayer = async (url) => {
            const cached = soundPlayerCache.get(url);
            if (cached) {
                if (cached.sound) {
                    return cached.sound;
                }
                throw cached.error;
            }

            try {
                const arrayBuffer = await fetchAsArrayBufferWithTimeout(url);
                const soundPlayer = await audioEngine.decodeSoundPlayer({
                    data: {
                        buffer: arrayBuffer,
                    },
                });
                soundPlayerCache.set(url, {
                    sound: soundPlayer,
                    error: null,
                });
                return soundPlayer;
            } catch (e) {
                soundPlayerCache.set(url, {
                    sound: null,
                    error: e,
                });
                throw e;
            }
        };

        const playWithAudioEngine = async (url, target) => {
            const soundBank = target.sprite.soundBank;

            let soundPlayer;
            try {
                const originalSoundPlayer = await decodeSoundPlayer(url);
                soundPlayer = originalSoundPlayer.take();
            } catch (e) {
                console.warn(
                    "Could not fetch audio; falling back to primitive approach",
                    e
                );
                return false;
            }

            soundBank.addSoundPlayer(soundPlayer);
            await soundBank.playSound(target, soundPlayer.id);

            delete soundBank.soundPlayers[soundPlayer.id];
            soundBank.playerTargets.delete(soundPlayer.id);
            soundBank.soundEffects.delete(soundPlayer.id);

            return true;
        };

        const playWithAudioElement = (url, target) =>
            new Promise((resolve, reject) => {
                const mediaElement = new Audio(url);

                mediaElement.volume = target.volume / 100;

                mediaElement.onended = () => {
                    resolve();
                };
                mediaElement
                    .play()
                    .then(() => {
                        // Wait for onended
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });

        const playSound = async (url, target) => {
            try {
                if (!(await Scratch.canFetch(url))) {
                    throw new Error(`Permission to fetch ${url} denied`);
                }

                const success = await playWithAudioEngine(url, target);
                if (!success) {
                    return await playWithAudioElement(url, target);
                }
            } catch (e) {
                console.warn(`All attempts to play ${url} failed`, e);
            }
        };

        playSound(ab, cd)
    }
    class Extension {
        getInfo() {
            return {
                "blockIconURI": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgB7ZjrDsMgCIXZ0vd/5a5bZmIMKsLZbIDvZ+P1gFxKlCRJCB6zAedFd/IFAbHs9SQnHNKBtSIj5RBo9opnEY5WrdU3g7RsbIu0yluVRUS/uBYp6nMqInx+tP6IjFo1RT1OTek3K+qLoA9jdUs3rjXl/EKbkO5/9CbTzajPxLlzjKiF7jc0SCthVdTqLYgqGjUCxkyIvbK9fJfmFtQ6NW4swt54psiuNzI6VzZWBAAZ3t1YJC9yNyCNFQcya0tQ/z1cTXrWebNz/Mwio/Z3C9bG6l/z/ZYoGvVGbiNxLcSecX4+cEj8th2jmbOC7zL+jSXSfBZebAGs68Z+Ixyr/m15DxzwzI483ArpWkkShBdmcfwGi5bajwAAAABJRU5ErkJggg==",
                "id": "julmikcatgpt",
                "name": "Cat-GPT",
                "color1": "#24a022",
                "color2": "#184e1c",
                "blocks": blocks
            }
        }
    }
    blocks.push({
        opcode: `ask`,
        blockType: Scratch.BlockType.REPORTER,
        text: `ask Cat-GPT [promt]`,
        arguments: {
            "promt": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow',
            },
        },
        disableMonitor: true
    });
    Extension.prototype[`ask`] = async (args, util) => {
        return 'Meow, meow meow meow, meow - meow meow! Meow meow, meow - meow meow meow. Meow meow meow meow, meow meow - meow meow? Meow meow meow meow, meow meow meow - meow meow meow meow. Meow meow meow meow, meow meow - meow meow meow meow, meow meow.'
    };

    blocks.push({
        opcode: `gif`,
        blockType: Scratch.BlockType.REPORTER,
        text: `random cat gif`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`gif`] = async (args, util) => {
        return ((Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) ? 'https://www.cat-gpt.com/cats/pZzXskj8qURuxfS8.gif' : ((Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) ? 'https://www.cat-gpt.com/cats/ZlaeXB69W7IpsygX.gif' : ((Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) ? 'https://www.cat-gpt.com/cats/dFKBXoVyZgldkWvT.gif' : ((Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) ? 'https://www.cat-gpt.com/cats/f9Z9cc313DplbKN8.gif' : ((Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) ? 'https://www.cat-gpt.com/cats/U6rJAGhsInmzk76f.gif' : ((Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) ? 'https://www.cat-gpt.com/cats/0QwT6IpMfatOBUvf.gif' : 'https://www.cat-gpt.com/cats/G9Pvz754kgKV9K5R.gif'))))))
    };

    blocks.push({
        opcode: `meow`,
        blockType: Scratch.BlockType.COMMAND,
        text: `meow`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`meow`] = async (args, util) => {
        doSound(`https://extensions.turbowarp.org/meow.mp3`, Scratch.vm.runtime.targets.find(target => target.isStage), Scratch.vm.runtime);
    };

    Scratch.extensions.register(new Extension());
})(Scratch);