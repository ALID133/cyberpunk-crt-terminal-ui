const codeContainer = document.getElementById("code-streamer");
let codeIndex = 0;
let streamingCodeText = "";

const pseudoJsCode = `function initCyberDeck() {
    console.log("System Status: NOMINAL");
    return "Code Injector Active";
}`;

async function loadTargetJsFile(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    streamingCodeText = await response.text();
  } catch (error) {
    streamingCodeText = pseudoJsCode;
  }
  codeIndex = 0;
  streamCode();
}

function streamCode() {
  if (!streamingCodeText) return;

  if (window.getSelection().toString().length > 0) {
    setTimeout(streamCode, 60);
    return;
  }

  if (codeIndex <= streamingCodeText.length) {
    const currentChunk = streamingCodeText.substring(0, codeIndex);

    codeContainer.innerHTML = "";
    const textNode = document.createTextNode(currentChunk);
    codeContainer.appendChild(textNode);

    const cursorSpan = document.createElement("span");
    cursorSpan.className = "cursor";
    codeContainer.appendChild(cursorSpan);

    codeIndex += 2;
    codeContainer.scrollTop = codeContainer.scrollHeight;
    setTimeout(streamCode, 30);
  } else {
    setTimeout(() => {
      codeIndex = 0;
      streamCode();
    }, 4000);
  }
}

const descContainer = document.getElementById("app-purpose-text");
let descIndex = 0;

const purposeMessage = `> Initialize core protocol...
> Target: Network node injection.
> Function: This terminal acts as a specialized Code Streamer and Runtime Emulator. It targets background layers, executing dynamic JavaScript routines to bypass localized firewalls and maintain visual synchronization across encrypted deck panels.

Status: RUNNING...`;

function typeDescription() {
  if (window.getSelection().toString().length > 0) {
    setTimeout(typeDescription, 60);
    return;
  }

  if (descIndex <= purposeMessage.length) {
    const currentText = purposeMessage.substring(0, descIndex);

    descContainer.innerHTML = "";
    const textNode = document.createTextNode(currentText);
    descContainer.appendChild(textNode);

    const cursorSpan = document.createElement("span");
    cursorSpan.className = "cursor";
    descContainer.appendChild(cursorSpan);

    descIndex++;
    setTimeout(typeDescription, 20);
  }
}

loadTargetJsFile("app.js");
setTimeout(typeDescription, 500);
