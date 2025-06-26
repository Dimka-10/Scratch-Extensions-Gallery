// Name: Hugging Face Chat
// ID: huggingFaceChatExtension
// Description: Extension for interacting with Hugging Face API.
// By: YourName
// License: MIT

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed)
    throw new Error("can not load out side unsandboxed mode");

  const extensionId = "huggingFaceChatExtension";

  class HuggingFaceChat {
    constructor() {
      this.responseText = "";
      this.apiKey = ""; // Токен API
      this.complete = false;
      this.error = false;
      this.errorMessage = ""; // Сообщение об ошибке
    }

    getInfo() {
      return {
        id: extensionId,
        name: "Hugging Face Chat",
        blocks: [
          {
            opcode: "setApiKey",
            blockType: Scratch.BlockType.COMMAND,
            text: "установить токен API на [API_KEY]",
            arguments: {
              API_KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "your_api_key_here",
              },
            },
          },
          {
            opcode: "askHuggingFace",
            blockType: Scratch.BlockType.COMMAND,
            text: "спросить [QUESTION] у Hugging Face",
            arguments: {
              QUESTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Как дела?",
              },
            },
          },
          {
            opcode: "getResponse",
            blockType: Scratch.BlockType.REPORTER,
            text: "ответ от Hugging Face",
          },
          {
            opcode: "hasError",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "произошла ошибка?",
          },
          {
            opcode: "isComplete",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "запрос завершён?",
          },
          {
            opcode: "getErrorMessage",
            blockType: Scratch.BlockType.REPORTER,
            text: "сообщение об ошибке",
          },
        ],
      };
    }

    setApiKey(args) {
      this.apiKey = args.API_KEY;
    }

    askHuggingFace(args) {
      const question = args.QUESTION;

      this.complete = false;
      this.error = false;
      this.errorMessage = "";

      fetch("https://api-inference.huggingface.co/models/gpt2", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: question }),
      })
        .then((response) => {
          if (!response.ok) {
            this.error = true;
            return response.json().then((data) => {
              this.errorMessage = data?.error || "Произошла неизвестная ошибка";
            });
          }
          return response.json();
        })
        .then((data) => {
          if (data && data[0].generated_text) {
            this.responseText = data[0].generated_text;
          } else {
            this.error = true;
            this.errorMessage = "Некорректный ответ от API";
          }
          this.complete = true;
        })
        .catch((err) => {
          this.error = true;
          this.errorMessage = err.message;
          this.complete = true;
        });
    }

    getResponse() {
      return this.responseText;
    }

    hasError() {
      return this.error;
    }

    isComplete() {
      return this.complete;
    }

    getErrorMessage() {
      return this.errorMessage;
    }
  }

  const instance = new HuggingFaceChat();
  Scratch.extensions.register(instance);
})(Scratch);