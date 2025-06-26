// Name: MIDI Blocks
// ID: midiBlocks
// Description: Handles MIDI input in turbowarp.
// By: Dimka10
// License: MIT

(function (Scratch) {
    "use strict";

    const ICON_URL = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDEuNzkzMTUiIGhlaWdodD0iMTQxLjc5MzE1IiB2aWV3Qm94PSIwLDAsMTQxLjc5MzE1LDE0MS43OTMxNSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OS4xMDM0MywtMTA5LjEwMzQzKSI+PGcgc3Ryb2tlPSJub25lIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0xNjkuMTAzNDMsMTgwYzAsLTM5LjE1NTEgMzEuNzQxNDgsLTcwLjg5NjU3IDcwLjg5NjU3LC03MC44OTY1N2MzOS4xNTUxLDAgNzAuODk2NTcsMzEuNzQxNDggNzAuODk2NTcsNzAuODk2NTdjMCwzOS4xNTUxIC0zMS43NDE0OCw3MC44OTY1NyAtNzAuODk2NTcsNzAuODk2NTdjLTM5LjE1NTEsMCAtNzAuODk2NTcsLTMxLjc0MTQ4IC03MC44OTY1NywtNzAuODk2NTd6IiBmaWxsPSIjNjk5NDMzIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzAyLjQ4NDk5LDE5MC40MDExOGMwLDAgLTM5LjI1OTQsMTQuODI2MDMgLTUyLjIxMDU2LDE5LjAyNjc5Yy03LjQ2NDMxLDIuNDIxMDcgLTI2LjA1MTY3LC0xMS4yMTE1NCAtMjYuMDUxNjcsLTExLjIxMTU0YzAsMCA0MC40MzQ0NiwtMTMuMTE1MDQgNTMuMzY5NDMsLTE3LjMxMDU0YzcuMzg4NjQsLTIuMzk2NTIgMjQuODkyOCw5LjQ5NTMgMjQuODkyOCw5LjQ5NTN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yNzMuNjQ1MTIsMTc3LjEzNTc4YzAsMCAtNDEuNTIzNTEsMTMuNDY4MjkgLTUyLjQzMTAzLDE3LjAwNjE4Yy00Ljk0NzY2LDEuNjA0NzggLTE1LjU2NDMsLTExLjIyNjg1IC0xNS41NjQzLC0xMS4yMjY4NWMwLDAgMjUuMTUyMjgsLTguMTU4MjIgMzYuMzU1ODcsLTExLjc5MjE0YzkuNjMwNDcsLTMuMTIzNjcgMzEuNjM5NDYsNi4wMTI4MyAzMS42Mzk0Niw2LjAxMjgzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjM3LjQ1NjUxLDE2Ny4xMTA5OWMwLDAgLTI2LjkyMTc0LDguNzMyMTYgLTM0LjkwMzYyLDExLjMyMTA5Yy00LjE2NzU1LDEuMzUxNzYgLTEyLjg3MTMzLC03LjI2MDQzIC0xMi44NzEzMywtNy4yNjA0M2MwLDAgMTMuMzM4MTIsLTQuMzI2MjYgMjAuNDE5MzIsLTYuNjIzMDhjNy42NzY5NCwtMi40OTAwNSAyNy4zNTU2MywyLjU2MjQgMjcuMzU1NjMsMi41NjI0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjA5Ljg1OTM4LDE2MS4yNTcyNGMwLDAgLTE1LjU3MzE0LDUuMDUxMiAtMjEuMTM2Miw2Ljg1NTZjLTMuNjI5MDgsMS4xNzcxIC0xMS4yNzEyNSwtNC4xMDExMSAtMTEuMjcxMjUsLTQuMTAxMTFjMCwwIDEzLjk5OTg3LC00LjU0MDkxIDE5LjUyMjc0LC02LjMzMjI3YzQuMDcxMTMsLTEuMzIwNDggMTIuODg0NzIsMy41Nzc3OCAxMi44ODQ3MiwzLjU3Nzc4eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMTk0Ljg0NDM2LDE2Ni4zNjhjLTEuMzMwMTQsLTAuNDMwNDUgLTEuOTA0NDYsLTEuNTE4NSAwLjA1NTc0LC0yLjE4ODQzYzQuMzUxNzQsLTEuNDg3MyAxMS42ODE4OSwtMy45OTI1IDEzLjc2Njc2LC00LjcwNTA0YzEuMDkzMjIsLTAuMzczNjQgOS4xNDcyMSwwLjU3MDI2IDExLjQ0NTEyLDEuMDEzMzZjMS4zNzM3NywwLjI2NDkxIDAuOTA2NzksMS41NTI5MiAtMC45NzE5MiwyLjI3NTgyYy0yLjQzODYxLDAuOTM4MzIgLTguODEyOTQsMy4zOTEwNCAtMTIuNzk2MTksNC45MjM3MWMtMS45OTUzOCwwLjc2Nzc3IC05LjQwMTgyLC0wLjY0MDU4IC0xMS40OTk1MSwtMS4zMTk0MnoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMTMuNzkzNjEsMTc0LjA2NjgyYy0wLjkyNTYsLTAuMzc5NzIgLTEuMDI1MjcsLTEuMTQ3NTQgMC41MDM5MSwtMS42OTA2NGM1LjQwMjU5LC0xLjkxODgxIDE4LjAzNzY1LC02LjQwNjMxIDIxLjU3NDA3LC03LjY2MjMyYzEuNzkwNTcsLTAuNjM1OTUgMTAuMTA0NTEsMC4zNjYwNCAxMi44MTI5OCwxLjA4ODYyYzIuMTk4NzYsMC41ODY1OSAzLjk3MDM2LDIuMzQ4MzggMi4xMTE4LDMuMDQ3MzljLTMuNzE3NzUsMS4zOTgyOCAtMTcuMTU1NjEsNi40NTIzNiAtMjMuMDg5MDcsOC42ODM5OWMtMS43NTIsMC42NTg5NCAtMTEuNzIyOTMsLTIuNTY4MjkgLTEzLjkxMzY5LC0zLjQ2NzAyeiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzOS40MTg1NCwxODYuNTg5NzRjLTEuMjk4NjgsLTAuNTU2NTQgLTEuMjkyMDIsLTEuNzA4OTUgMS4wMjkxNSwtMi41NDM2NWM3Ljg1MTMxLC0yLjgyMzM2IDI1LjQ4OTA4LC05LjE2NTk1IDI5LjI5MDgzLC0xMC41MzMwNmMxLjQxNjcsLTAuNTA5NDQgNy44NDU2OSwxLjI0NTQ0IDEwLjY3MjU5LDIuNDc4ODljMS40MDg3NCwwLjYxNDY3IDMuNTY0NTgsMS41NTUzMyA1LjU1MjY5LDIuNDIyNzljMi41ODg5MywxLjEyOTYzIDMuMzkwNjksMi42ODA2MyAxLjgyNzQ3LDMuMjQ4MDVjLTMuODYwMjcsMS40MDEyNCAtMjAuNTUzNzgsNy40NjA3OCAtMjguMzYwNjUsMTAuMjk0NTdjLTIuNDcyMzQsMC44OTc0MyAtMTYuODg4MDQsLTQuMDI4ODIgLTIwLjAxMjA5LC01LjM2NzZ6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo3MC44OTY1NzMzNTk1MTg4NDo3MC44OTY1NzMzNTk1MTg4LS0+'; // Replace with your full SVG data

    class MidiBlocks {
        constructor() {
            this.lastKeyPressed = null;
            this.midiAccess = null;
            this.output = {};
            this.isMidiConnected = false;
            this.keyPressedFlag = false; // Flag for "Key on MIDI device pressed" status

            // Request MIDI Access on initialization
            this.requestMIDIAccess();
        }

        getInfo() {
            return {
                id: 'midiBlocks',
                name: 'MIDI Blocks',
                color1: "#699433",
                blockIconURI: ICON_URL, // Use constant for the icon
                blocks: [
                    {
                        opcode: 'midiDeviceConnected',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'MIDI device connected?',
                        arguments: {},
                    },
                    {
                        opcode: 'keyPressed',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Key on MIDI device pressed',
                        arguments: {},
                    },
                    {
                        opcode: 'lastPressedKey',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Last pressed key on MIDI device',
                        arguments: {},
                    },
                    {
                        opcode: 'isKeyPressed',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Key [key] pressed?',
                        arguments: {
                            key: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'pianoMenu', // Use existing piano menu
                            },
                        },
                    }
                ],
                menus: {
                    pianoMenu: this.createPianoKeyList(), // Create a list of piano keys
                },
            };
        }

        // Create a list of piano keys
        createPianoKeyList() {
            const keys = [];
            const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

            for (let octave = 0; octave <= 8; octave++) {
                for (const note of notes) {
                    keys.push(`${note}${octave}`);
                }
            }

            return keys;
        }

        requestMIDIAccess() {
            navigator.requestMIDIAccess()
                .then(midiAccess => {
                    this.midiAccess = midiAccess;
                    this.isMidiConnected = true; // MIDI device connected
                    const inputs = midiAccess.inputs;
                    for (let input of inputs.values()) {
                        input.onmidimessage = this.handleMIDIMessage.bind(this);
                    }
                })
                .catch(err => {
                    console.error('Failed to get MIDI access', err);
                    this.isMidiConnected = false; // MIDI device not connected
                });
        }

        handleMIDIMessage(message) {
            const [command, note, velocity] = message.data;
            if (command === 144 && velocity > 0) { // Note On
                this.lastKeyPressed = note; // MIDI note number
                this.output[note] = true; // Set key as pressed
                this.keyPressedFlag = true; // Set the key pressed flag
            } else if (command === 128 || (command === 144 && velocity === 0)) { // Note Off
                this.output[note] = false; // Set key as released
            }
        }

        midiDeviceConnected() {
            return this.isMidiConnected; // Return true if MIDI access was granted and connected
        }

        keyPressed() {
            const wasPressed = this.keyPressedFlag; // Check if it was pressed since last call
            this.keyPressedFlag = false; // Reset flag
            return wasPressed; // Return the value and reset the flag
        }

        lastPressedKey() {
            return this.lastKeyPressed !== null ? this.noteToKey(this.lastKeyPressed) : '';
        }

        isKeyPressed({ key }) {
            return !!this.output[this.keyToNoteNumber(key)];
        }

        keyToNoteNumber(key) {
            const octave = parseInt(key.slice(-1), 10); // Get the octave number
            const baseNote = key.slice(0, -1); // Get the note name (all but the last character)
            const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
            const noteIndex = notes.indexOf(baseNote); // Get index of the note

            if (noteIndex === -1) {
                throw new Error('Invalid note');
            }

            return noteIndex + (octave + 1) * 12; // Adjust octave for proper calculation (C0 = 12)
        }

        noteToKey(note) {
            const octave = Math.floor(note / 12) - 1; // Adjust for proper octave display
            const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
            return noteNames[note % 12] + octave; // Get the key name
        }
    }

    Scratch.extensions.register(new MidiBlocks());
})(Scratch);