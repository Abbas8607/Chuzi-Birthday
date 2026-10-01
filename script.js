const chick = document.getElementById("chick");
const dopey = document.getElementById("dopey");

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const dialogue = document.getElementById("dialogue");
const hint = document.getElementById("hint");

const introScreen = document.getElementById("introScreen");
const filesScreen = document.getElementById("filesScreen");

const jokesFile = document.getElementById("jokesFile");
const jokesPanel = document.getElementById("jokesPanel");
const closeJokes = document.getElementById("closeJokes");

const memoriesFile = document.getElementById("memoriesFile");

const memoryPanel = document.getElementById("memoryPanel");
const closeMemory = document.getElementById("closeMemory");

const fullMemory = document.getElementById("fullMemory");
const closeFullMemory = document.getElementById("closeFullMemory");

const fullMemoryNumber = document.getElementById("fullMemoryNumber");
const fullMemoryTitle = document.getElementById("fullMemoryTitle");
const fullMemoryText = document.getElementById("fullMemoryText");

const nextMemory = document.getElementById("nextMemory");

const memory1 = document.getElementById("memory1");
const memory2 = document.getElementById("memory2");
const memory3 = document.getElementById("memory3");

const chuziFile = document.getElementById("chuziFile");

const profilePanel = document.getElementById("profilePanel");
const closeProfile = document.getElementById("closeProfile");

const scanChuzi = document.getElementById("scanChuzi");
const personalityReport = document.getElementById("personalityReport");
const weaknessButton = document.getElementById("weaknessButton");

const profileResult = document.getElementById("profileResult");

// =========================
// START BUTTON
// =========================

startButton.addEventListener("click", () => {

    dialogue.textContent = "Hmm... someone looks suspicious. 👀";

    dialogue.classList.remove("show");

    // Restart animation
    void dialogue.offsetWidth;

    dialogue.classList.add("show");

    startButton.textContent = "Now tap Chuzi... 🐥";

    hint.textContent = "I warned you. 😭";

});


// =========================
// CHUZI ATTACK
// =========================

chick.addEventListener("click", () => {

    playBonkSound();

    // Chick attacks
    chick.classList.remove("attacking");
    dopey.classList.remove("hit");

    void chick.offsetWidth;
    void dopey.offsetWidth;

    chick.classList.add("attacking");
    dopey.classList.add("hit");

    // Dialogue
    dialogue.textContent = "CHUZI: 😈 BONK.";

    dialogue.classList.remove("show");
    void dialogue.offsetWidth;
    dialogue.classList.add("show");

    hint.textContent = "DOPEY has suffered emotional damage. 💀";

    // Change button
    startButton.classList.add("hidden");
    continueButton.classList.remove("hidden");

});


// =========================
// DOPEY REACTION
// =========================

dopey.addEventListener("click", () => {

    dialogue.textContent = "DOPEY: BRO I JUST OPENED THE WEBSITE 😭";

    dialogue.classList.remove("show");
    void dialogue.offsetWidth;
    dialogue.classList.add("show");

    hint.textContent = "Apparently Dopey is not safe here.";

});


// =========================
// CONTINUE
// =========================

continueButton.addEventListener("click", () => {

    introScreen.style.display = "none";

    filesScreen.classList.remove("hidden");

}); 

// =========================
// INSIDE JOKES FILE
// =========================

jokesFile.addEventListener("click", () => {

    jokesPanel.classList.remove("hidden");

});


closeJokes.addEventListener("click", () => {

    jokesPanel.classList.add("hidden");

});

// =========================
// MEMORY ARCHIVE
// =========================

const memories = [

    {
        number: "MEMORY #01",

        title: "Hao... I still remember our 1st conversation.😁😁😁",

        text: `Aapka 1st msg tha:

“Assalamalaikum Areeba Here” 😂

and apni conversation bht short thi like sirf kaam ki baat and that's it... 
I thought shyd sirf normal conversation hogi or khtm hogai butttt...
thode din tk baat hui aapse and yeah aap bht acchi se baat krre the bcuz I didn't knew koi 
Mlg girl aisa acchi se bhi baat krleti sakti soo haan mujhe accha lgta tha😂😂😂 and 
aise ek dusre ku topper topper krke address krte the Starting mai abi soch kr lgta kitta formally
baat krre the🤣🤣🤣... I still laught while reading those texts🤣🤣🤣 
and then we start msging... helping each other
and eventually I got the best person of the clg as my Friend.

Not just a friend.

My Best Friend.

Bestieee!!!!. 🫶

Alhumdulillah!.`
    },


    {
        number: "MEMORY #02",

        title: "The Gossip Legacy™ 😂",

        text: `Ye koi topic discuss karne wala nahi tha...

But jb apne acche khase comfortable hogaye the to ek new feature unlock hogya tha apne bich!😁

GOSSIPS. 😂🤣🤣🤣

Ek dusre k ps koi na koi or kuch na kuch update rehti thi😜😜😜...

Kisi lka kuch pta chale too...:

“Sunooo...”

or phir bs.
Conversation khtm ich nai hoti thi.😂
Idk apne kitte cases discuss kiye hai...
But one thing is certain...

THE LEGACY IS STILL ON. 🫡😂😜`
    },


    {
        number: "MEMORY #03",

        title: "You actually made me feel good. 🫶",

        text: `Idk aapku yad hai k bhi nai ki...

Apne conversation krre the and u said something to me (jo k ab aap bindas boldete mujhku satane) and 
mai bs uska normal reply krke chale gaya but u thought.

“Baah... ye ladke ku kya hogya!? Reply kaiku nai krra hai? Aise toh kabhi naraz nahi hota!!!.” 😭 (Ye sb aap call pr bole the)

And Then..

Itte saare messages.

Sorry ke stickers.

Calls.

or calls.

or or calls. 😭😂

Idk how were u feeling but mai aakr aapke itte saare calls dekha to hairan hogya tha and when i recieved one
Aap sorry bolre the.😂😂
and jb pta chla mai kuch gussa nai tha to aisa chidre the
“Tum kitte kharab ho... mai dar gai thi!” 😭😂

Honestly...

I genuinely feel good knowing that you care about our friendship that much.

Maybe aapku ye yaad ho ya na ho but mujhe hai
because it made me realize ki...
You genuinely care about this friendship a lot.
and honestly, that feels really good. 🫶

Or HAAAN...

Mai bhi krtu.😂😂😂`
    }

];


let currentMemory = 0;


// OPEN MEMORY ARCHIVE

memoriesFile.addEventListener("click", () => {

    memoryPanel.classList.remove("hidden");

});


// CLOSE MEMORY ARCHIVE

closeMemory.addEventListener("click", () => {

    memoryPanel.classList.add("hidden");

});


// OPEN A FULL MEMORY

function openMemory(index) {

    currentMemory = index;

    const memory = memories[index];

    fullMemoryNumber.textContent = memory.number;

    fullMemoryTitle.textContent = memory.title;

    fullMemoryText.textContent = memory.text;

    fullMemory.classList.remove("hidden");

}


// MEMORY BUTTONS

memory1.addEventListener("click", () => {
    openMemory(0);
});

memory2.addEventListener("click", () => {
    openMemory(1);
});

memory3.addEventListener("click", () => {
    openMemory(2);
});


// CLOSE FULL MEMORY

closeFullMemory.addEventListener("click", () => {

    fullMemory.classList.add("hidden");

});


// NEXT MEMORY

nextMemory.addEventListener("click", () => {

    // If we're on the "end" screen, go back to the archive
    if (nextMemory.dataset.mode === "end") {
        fullMemory.classList.add("hidden");
        nextMemory.textContent = "Next memory →";
        delete nextMemory.dataset.mode;
        return;
    }

    if (currentMemory < memories.length - 1) {
        openMemory(currentMemory + 1);
    } else {
        fullMemoryTitle.textContent = "End of the Archive. 🫶";
        fullMemoryNumber.textContent = "FINAL ENTRY";
        fullMemoryText.textContent =
            "Some memories don't need pictures to be remembered.\n\nAnd these three are only a tiny part of the story.";
        nextMemory.textContent = "← Back to memories";
        nextMemory.dataset.mode = "end";
    }
});

// ===== CHUZI PROFILE =====

// Open profile from the Files screen
chuziFile.addEventListener("click", () => {
    profilePanel.classList.remove("hidden");
});

// Close profile
closeProfile.addEventListener("click", () => {
    profilePanel.classList.add("hidden");
});

// Helper: show a result in the result box
function showProfileResult(html) {
    profileResult.innerHTML = html;
}

// 🔍 Scan Chuzi
scanChuzi.addEventListener("click", () => {
    showProfileResult(`
        <p class="result-title">🔍 SCAN COMPLETE</p>
        <p>Beautiful: 98%</p>
        <p>Chaos: 100%</p>
        <p>Danger to Dopey: EXTREME 😭</p>
    `);
});

// 📋 Personality Report
personalityReport.addEventListener("click", () => {
    showProfileResult(`
        <p class="result-title">📋 PERSONALITY REPORT</p>
        <p>Looks innocent. But Hai Nai.</p>
        <p>Bht Bade Overthinker😂</p>
        <p>LADY DON 😎😎😎</p>
        <p>But Kind Hearted Person🫶🫶🫶 </p>
    `);
});

// ⚠️ Reveal Weakness
weaknessButton.addEventListener("click", () => {
    showProfileResult(`
        <p class="result-title">⚠️ WEAKNESS FOUND</p>
        <p>SLEEP!!!.. Bachi ku agr Nind aai to khtmm hai mamla!..👀</p>
    `);
});

// ===== MESSAGE PANEL =====

const messageFile = document.getElementById("messageFile");
const messagePanel = document.getElementById("messagePanel");
const closeMessage = document.getElementById("closeMessage");

messageFile.addEventListener("click", () => {
    messagePanel.classList.remove("hidden");
});

closeMessage.addEventListener("click", () => {
    messagePanel.classList.add("hidden");
});

// ===== PARTY PANEL =====

const secretFile = document.getElementById("secretFile");
const partyPanel = document.getElementById("partyPanel");
const closeParty = document.getElementById("closeParty");
const partyBg = document.getElementById("partyBg");

function makeBalloons() {

    partyBg.innerHTML = "";

    const colors = ["#ff6b81", "#ffa502", "#7bed9f", "#70a1ff", "#eccc68", "#a29bfe"];

    for (let i = 0; i < 12; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";
        balloon.style.left = Math.random() * 90 + "%";
        balloon.style.background = colors[i % colors.length];
        balloon.style.animationDuration = (7 + Math.random() * 6) + "s";
        balloon.style.animationDelay = (Math.random() * 4) + "s";

        partyBg.appendChild(balloon);
    }
}

function makeBanner() {

    const banner = document.getElementById("banner");

    banner.innerHTML = "";

    const words = ["HAPPY", "BIRTHDAY"];
    const colors = ["#ff6b81", "#ffa502", "#7bed9f", "#70a1ff", "#eccc68", "#a29bfe"];

    let colorIndex = 0;

    words.forEach((word) => {

        const row = document.createElement("div");
        row.className = "banner-row";

        row.innerHTML = `
            <svg class="banner-string" viewBox="0 0 300 48" preserveAspectRatio="none">
                <path d="M0,2 Q150,30 300,2"></path>
            </svg>
        `;

        const letters = word.split("");

        letters.forEach((letter, i) => {

            const t = (i + 1) / (letters.length + 1);

            const y = 2 + 56 * t - 56 * t * t;
            const angle = Math.atan((56 - 112 * t) / 300) * 180 / Math.PI;

            const flag = document.createElement("div");

            flag.className = "flag";
            flag.textContent = letter;
            flag.style.left = (t * 100) + "%";
            flag.style.top = y + "px";
            flag.style.background = colors[colorIndex % colors.length];
            flag.style.transform = "translateX(-50%) rotate(" + angle + "deg)";
            flag.style.animationDelay = (colorIndex * 0.08) + "s";

            colorIndex++;

            row.appendChild(flag);
        });

        banner.appendChild(row);
    });
}

function makeSprinkles() {

    const colors = ["#ff6b81", "#ffa502", "#70a1ff", "#7bed9f", "#eccc68", "#a29bfe", "#ffffff"];

    cake.querySelectorAll(".layer").forEach((layer) => {

        // clear old sprinkles first, so reopening doesn't pile them up
        layer.querySelectorAll(".sprinkle").forEach((s) => s.remove());

        for (let i = 0; i < 14; i++) {

            const sprinkle = document.createElement("div");

            sprinkle.className = "sprinkle";
            sprinkle.style.left = (6 + Math.random() * 88) + "%";
            sprinkle.style.top = (8 + Math.random() * 60) + "%";
            sprinkle.style.background = colors[Math.floor(Math.random() * colors.length)];
            sprinkle.style.transform = "rotate(" + Math.random() * 360 + "deg)";

            layer.appendChild(sprinkle);
        }
    });
}

// ===== PARTY STEP 2: CANDLE, CONFETTI, STICKERS, MUSIC =====

const lightBtn = document.getElementById("lightBtn");
const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const candle = document.getElementById("candle");
const partyText = document.getElementById("partyText");
const confettiLayer = document.getElementById("confettiLayer");

let partyTimer = null;
let audioCtx = null;


// STOP EVERYTHING (used when closing / restarting)

function stopParty() {

    clearTimeout(partyTimer);

    stopMusic();

    flame.classList.remove("lit");

    lightBtn.classList.add("hidden");
    blowBtn.classList.add("hidden");

    confettiLayer.innerHTML = "";

    partyText.textContent = "Something special is being prepared... 🎂";
}


// OPEN THE PARTY

secretFile.addEventListener("click", () => {

    makeBalloons();
    makeBanner();
    makeSprinkles();

    stopParty();

    partyPanel.classList.remove("hidden");

    // after the cake has dropped, show the first button
    partyTimer = setTimeout(() => {

        partyText.textContent = "Light the candle, Chuzi! 🕯️";

        lightBtn.classList.remove("hidden");

    }, 3600);

});


// CLOSE THE PARTY

closeParty.addEventListener("click", () => {

    partyPanel.classList.add("hidden");

    stopParty();

});


// LIGHT THE CANDLE

lightBtn.addEventListener("click", () => {

    flame.classList.add("lit");

    lightBtn.classList.add("hidden");
    blowBtn.classList.remove("hidden");

    partyText.textContent = "Make a wish... then blow! 🌟";

});


// BLOW THE CANDLE

blowBtn.addEventListener("click", () => {

    flame.classList.remove("lit");

    blowBtn.classList.add("hidden");

    puffSmoke();
    launchConfetti();
    addStickers();
    playBirthdaySong();

    partyText.textContent = "HAPPY BIRTHDAY BESTIEE!!! 🎉🥳";

});


// SMOKE PUFF

function puffSmoke() {

    const smoke = document.createElement("div");

    smoke.className = "smoke";

    candle.appendChild(smoke);

    setTimeout(() => smoke.remove(), 1500);
}


// CONFETTI

function launchConfetti() {

    const colors = ["#ff6b81", "#ffa502", "#7bed9f", "#70a1ff", "#eccc68", "#a29bfe", "#ffffff"];

    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("div");

        const size = 6 + Math.random() * 8;

        piece.className = "confetti";
        piece.style.width = size + "px";
        piece.style.height = (size * 1.6) + "px";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.background = colors[i % colors.length];
        piece.style.setProperty("--drift", (Math.random() * 120 - 60) + "px");
        piece.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
        piece.style.animationDelay = (Math.random() * 0.8) + "s";

        confettiLayer.appendChild(piece);
    }

    setTimeout(() => {
        confettiLayer.innerHTML = "";
    }, 6500);
}


// STICKERS ON THE WALL

function addStickers() {

    const emojis = ["🎉", "🎈", "🎂", "🎁", "⭐", "🥳", "🎊", "💖", "🐥", "✨"];

    emojis.forEach((emoji, i) => {

        const sticker = document.createElement("div");

        const onLeft = i % 2 === 0;

        sticker.className = "sticker";
        sticker.textContent = emoji;

        sticker.style.left = (onLeft ? 3 + Math.random() * 18 : 72 + Math.random() * 16) + "%";
        sticker.style.top = (18 + Math.random() * 45) + "%";
        sticker.style.setProperty("--tilt", (Math.random() * 40 - 20) + "deg");
        sticker.style.animationDelay = (i * 0.15) + "s";

        partyBg.appendChild(sticker);
    });
}


// HAPPY BIRTHDAY MUSIC (made in code, no mp3 needed)

function playBirthdaySong(volume = 0.25) {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    stopMusic();

    audioCtx = new AudioContextClass();

    // [note frequency, length in beats]
    const notes = [

        [392, 0.75], [392, 0.25], [440, 1], [392, 1], [523.25, 1], [493.88, 2],

        [392, 0.75], [392, 0.25], [440, 1], [392, 1], [587.33, 1], [523.25, 2],

        [392, 0.75], [392, 0.25], [783.99, 1], [659.25, 1], [523.25, 1], [493.88, 1], [440, 2],

        [698.46, 0.75], [698.46, 0.25], [659.25, 1], [523.25, 1], [587.33, 1], [523.25, 2]

    ];

    const beat = 0.45;

    let time = audioCtx.currentTime + 0.2;

    notes.forEach(([frequency, beats]) => {

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        const duration = beats * beat;

        osc.type = "triangle";
        osc.frequency.value = frequency;

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(volume, time + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, time + duration * 0.95);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(time);
        osc.stop(time + duration);

        time += duration;
    });
}

function stopMusic() {

    if (audioCtx) {
        audioCtx.close();
        audioCtx = null;
    }
}

// ===== PARTY STEP 3: CUT THE CAKE =====

const cake = document.getElementById("cake");
const partyScene = document.getElementById("partyScene");
const knife = document.getElementById("knife");

let knifeTimer = null;
let dragging = false;
let cutDone = false;
let startY = 0;

const CUT_DISTANCE = 120;


// AFTER BLOWING THE CANDLE, THE KNIFE APPEARS

blowBtn.addEventListener("click", () => {

    clearTimeout(knifeTimer);

    knifeTimer = setTimeout(() => {

        partyText.textContent = "Now cut the cake, Chuzi! 🔪 Drag the knife down ⬇️";

        cake.classList.add("ready-to-cut");

        knife.classList.remove("hidden");

    }, 4500);

});


// DRAGGING THE KNIFE

knife.addEventListener("pointerdown", (e) => {

    if (cutDone) return;

    dragging = true;

    startY = e.clientY;

    knife.setPointerCapture(e.pointerId);

    knife.style.transition = "none";

});

knife.addEventListener("pointermove", (e) => {

    if (!dragging || cutDone) return;

    const dy = Math.max(0, Math.min(e.clientY - startY, CUT_DISTANCE + 20));

    knife.style.transform = "translateY(" + dy + "px)";

    if (dy >= CUT_DISTANCE) {

        dragging = false;

        cutCake();
    }

});

function releaseKnife() {

    if (!dragging) return;

    dragging = false;

    knife.style.transition = "transform 0.3s ease";
    knife.style.transform = "translateY(0)";
}

knife.addEventListener("pointerup", releaseKnife);
knife.addEventListener("pointercancel", releaseKnife);


// CUT THE CAKE

function makeHalf(sideClass) {

    const half = cake.cloneNode(true);

    half.removeAttribute("id");

    half.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));

    half.classList.add("cake-half", sideClass);

    partyScene.appendChild(half);
}

function cutCake() {

    cutDone = true;
    playSliceSound();

    // a new plate that stays under everything
    // (it has the "cake-half" class only so the reset code removes it too)
    const plate = document.createElement("div");

    plate.className = "cake-plate cake-half";

    partyScene.appendChild(plate);

    // the inside of the cake, shown in the gap
    const inside = document.createElement("div");

    inside.className = "cake-inside";

    partyScene.appendChild(inside);

    // the two halves
    makeHalf("half-left");
    makeHalf("half-right");

    cake.classList.add("cut");

    knife.classList.add("done");

    partyText.textContent = "Perfect cut!! 🎉 Enjoy the cake, Chuzi! 🍰";

    partyBurst();

        setTimeout(() => {
        giftBtn.classList.remove("hidden");
    }, 2200);
}


// PARTY BURST

function partyBurst() {

    launchConfetti();

    const emojis = ["✨", "🎉", "💥", "⭐", "🎊", "💖"];

    for (let i = 0; i < 24; i++) {

        const spark = document.createElement("div");

        const angle = (i / 24) * Math.PI * 2;
        const distance = 90 + Math.random() * 110;

        spark.className = "spark";
        spark.textContent = emojis[i % emojis.length];

        spark.style.setProperty("--x", Math.cos(angle) * distance + "px");
        spark.style.setProperty("--y", (Math.sin(angle) * distance - 30) + "px");

        partyScene.appendChild(spark);

        setTimeout(() => spark.remove(), 1400);
    }

    const colors = ["#ff6b81", "#ffa502", "#70a1ff", "#a29bfe", "#7bed9f", "#eccc68"];

    for (let i = 0; i < 10; i++) {

        const streamer = document.createElement("div");

        const onLeft = i % 2 === 0;

        streamer.className = "streamer";

        streamer.style.left = (onLeft ? 2 + Math.random() * 14 : 84 + Math.random() * 14) + "%";
        streamer.style.height = (110 + Math.random() * 150) + "px";
        streamer.style.animationDelay = (Math.random() * 0.4) + "s";

        streamer.style.background =
            "repeating-linear-gradient(180deg, " +
            colors[i % colors.length] +
            " 0 12px, rgba(255,255,255,0.75) 12px 20px)";

        partyBg.appendChild(streamer);
    }
}


// RESET (when the panel is opened or closed)

function resetCut() {

    clearTimeout(knifeTimer);

    cutDone = false;
    dragging = false;

    knife.classList.add("hidden");
    knife.classList.remove("done");

    knife.style.transform = "";
    knife.style.transition = "";

    cake.classList.remove("cut", "ready-to-cut");

        giftBtn.classList.add("hidden");

    partyScene.querySelectorAll(".cake-half, .cake-inside, .spark").forEach((el) => el.remove());
}

secretFile.addEventListener("click", resetCut);
closeParty.addEventListener("click", resetCut);

// ===== BIRTHDAY WISH CARD =====

const giftBtn = document.getElementById("giftBtn");
const giftPanel = document.getElementById("giftPanel");
const closeGift = document.getElementById("closeGift");
const cardCover = document.getElementById("cardCover");
const giftHint = document.getElementById("giftHint");

let cardOpened = false;
let cardDragging = false;
let cardStartX = 0;


function openCard() {

    if (cardOpened) return;

    cardOpened = true;

    cardCover.classList.add("open");

    giftHint.textContent = "🎂 Happy Birthday, Chuzi 🐥";
}


function resetCard() {

    cardOpened = false;
    cardDragging = false;

    cardCover.classList.remove("open");

    giftHint.textContent = "Slide the card open →";
}


cardCover.addEventListener("pointerdown", (e) => {

    if (cardOpened) return;

    cardDragging = true;
    cardStartX = e.clientX;

    cardCover.setPointerCapture(e.pointerId);
});


cardCover.addEventListener("pointermove", (e) => {

    if (!cardDragging || cardOpened) return;

    const dx = cardStartX - e.clientX;

    if (dx > 55) {

        cardDragging = false;

        openCard();
    }
});


cardCover.addEventListener("pointerup", () => {

    if (!cardDragging) return;

    cardDragging = false;

    // tap fallback: if she just taps, it opens too
    if (!cardOpened) openCard();
});


cardCover.addEventListener("pointercancel", () => {

    cardDragging = false;
});


giftBtn.addEventListener("click", () => {

    resetCard();

    giftPanel.classList.remove("hidden");
});


closeGift.addEventListener("click", () => {

    giftPanel.classList.add("hidden");
});

// ===== MULTI-PAGE CARD =====

const letterPages = document.querySelectorAll(".letter-page");
const pageDots = document.getElementById("pageDots");
const pagePrev = document.getElementById("pagePrev");
const pageNext = document.getElementById("pageNext");
const birthdayGiftBtn = document.getElementById("birthdayGiftBtn");

let currentPage = 0;

// build dots
letterPages.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    pageDots.appendChild(dot);
});

const dots = pageDots.querySelectorAll("span");

function goToPage(index) {

    if (index < 0 || index >= letterPages.length) return;

    letterPages.forEach((page, i) => {
        page.classList.remove("active", "prev");
        if (i === index)      page.classList.add("active");
        else if (i < index)   page.classList.add("prev");
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    currentPage = index;

    pagePrev.classList.toggle("hidden", index === 0);
    pageNext.classList.toggle("hidden", index === letterPages.length - 1);

    // gift button appears only when card is open AND on last page
    if (cardOpened && index === letterPages.length - 1) {
        birthdayGiftBtn.classList.remove("hidden");
    } else {
        birthdayGiftBtn.classList.add("hidden");
    }
}

pagePrev.addEventListener("click", () => goToPage(currentPage - 1));
pageNext.addEventListener("click", () => goToPage(currentPage + 1));

// swipe on the card
const letterCard = document.getElementById("letterCard");

let swipeStartX = 0;
let swipeStartY = 0;
let swiping = false;

letterCard.addEventListener("pointerdown", (e) => {
    if (!cardOpened) return;
    if (e.target.closest(".card-cover")) return;

    swiping = true;
    swipeStartX = e.clientX;
    swipeStartY = e.clientY;
});

letterCard.addEventListener("pointerup", (e) => {

    if (!swiping) return;
    swiping = false;

    const dx = e.clientX - swipeStartX;
    const dy = e.clientY - swipeStartY;

    if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;

    if (dx < 0) goToPage(currentPage + 1);
    else        goToPage(currentPage - 1);
});

letterCard.addEventListener("pointercancel", () => {
    swiping = false;
});


// hook into the existing openCard / resetCard

const _originalOpenCard = openCard;

openCard = function () {

    if (cardOpened) return;

    cardOpened = true;

    cardCover.classList.add("open");
    giftHint.textContent = "🎂 Happy Birthday, Chuzi 🐥";

    goToPage(0);
};

const _originalResetCard = resetCard;

resetCard = function () {

    cardOpened = false;
    cardDragging = false;

    cardCover.classList.remove("open");
    giftHint.textContent = "Slide the card open →";

    goToPage(0);
    birthdayGiftBtn.classList.add("hidden");
};


// ===== GIFT BOX + CERTIFICATE =====

const giftboxPanel = document.getElementById("giftboxPanel");
const closeGiftbox = document.getElementById("closeGiftbox");
const giftbox = document.getElementById("giftbox");
const giftboxHint = document.getElementById("giftboxHint");
const giftConfetti = document.getElementById("giftConfetti");
const certificateImg = document.getElementById("certificateImg");
const certificateFallback = document.querySelector(".certificate-fallback");

let giftboxOpened = false;

// image works → hide fallback; image missing → hide broken img
certificateImg.addEventListener("load", () => {
    certificateFallback.style.display = "none";
});

certificateImg.addEventListener("error", () => {
    certificateImg.style.display = "none";
    certificateFallback.style.display = "block";
});


birthdayGiftBtn.addEventListener("click", () => {

    giftPanel.classList.add("hidden");
    resetGiftbox();

    giftboxPanel.classList.remove("hidden");
});


closeGiftbox.addEventListener("click", () => {
    giftboxPanel.classList.add("hidden");
});


giftbox.addEventListener("click", () => {

    if (giftboxOpened) return;
    giftboxOpened = true;

    giftbox.classList.add("opened");
    giftboxPanel.classList.add("opened");

    giftboxHint.textContent = "🎉 Surprise!! 🎉";

    launchGiftConfetti();
});


function resetGiftbox() {
    giftboxOpened = false;
    giftbox.classList.remove("opened");
    giftboxPanel.classList.remove("opened");
    giftboxHint.textContent = "Tap the gift 🎁";
    giftConfetti.innerHTML = "";
}


function launchGiftConfetti() {

    const colors = ["#ff6b81", "#ffa502", "#7bed9f", "#70a1ff", "#eccc68", "#a29bfe", "#ffffff"];

    for (let i = 0; i < 90; i++) {

        const piece = document.createElement("div");
        const size = 6 + Math.random() * 8;

        piece.className = "confetti";
        piece.style.width = size + "px";
        piece.style.height = (size * 1.6) + "px";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.background = colors[i % colors.length];
        piece.style.setProperty("--drift", (Math.random() * 140 - 70) + "px");
        piece.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
        piece.style.animationDelay = (Math.random() * 0.6) + "s";

        giftConfetti.appendChild(piece);
    }

    setTimeout(() => {
        giftConfetti.innerHTML = "";
    }, 6500);
}

// ===== ENDING: FIREWORKS, MUSIC, FINAL LINE, BUTTONS =====

// ✏️ EDIT THIS: the final line she will see (\n makes a new line)
const finalLine = "Happy Birthday, Chuzi 🐥💛\nI'm really glad I got you as my bestie. 🫶";

const fireworksCanvas = document.getElementById("fireworksCanvas");
const fwCtx = fireworksCanvas.getContext("2d");
const giftboxEnding = document.getElementById("giftboxEnding");
const endActions = document.getElementById("endActions");
const readAgainBtn = document.getElementById("readAgainBtn");
const backToFilesBtn = document.getElementById("backToFilesBtn");

let fwParticles = [];
let fwRunning = false;
let fwFrame = null;
let fwSpawn = null;
let fwStop = null;
let fwW = 0;
let fwH = 0;

let endTypeTimer = null;
let endingStarted = false;


// ---------- FIREWORKS ----------

function sizeFireworks() {

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    fwW = window.innerWidth;
    fwH = window.innerHeight;

    fireworksCanvas.width = fwW * dpr;
    fireworksCanvas.height = fwH * dpr;

    fwCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function burstFirework(x, y) {

    const colors = ["#ff4d6d", "#ff9f1c", "#1fb5a8", "#4d8cff", "#b06bff", "#f5b700"];

    const color = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];

    // big ring
    for (let i = 0; i < 48; i++) {

        const angle = (i / 48) * Math.PI * 2;
        const speed = 2.2 + Math.random() * 2.4;

        fwParticles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            decay: 0.010 + Math.random() * 0.010,
            color: color,
            size: 2.4
        });
    }

    // small inner ring
    for (let i = 0; i < 24; i++) {

        const angle = (i / 24) * Math.PI * 2 + 0.2;
        const speed = 0.8 + Math.random() * 1.2;

        fwParticles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            decay: 0.014 + Math.random() * 0.010,
            color: color2,
            size: 2
        });
    }
}

function spawnFirework() {

    burstFirework(
        fwW * (0.15 + Math.random() * 0.7),
        fwH * (0.12 + Math.random() * 0.42)
    );
}

function drawFireworks() {

    // fade old drawings a little, so particles leave trails
    fwCtx.globalCompositeOperation = "destination-out";
    fwCtx.fillStyle = "rgba(0, 0, 0, 0.2)";
    fwCtx.fillRect(0, 0, fwW, fwH);
    fwCtx.globalCompositeOperation = "source-over";

    fwParticles = fwParticles.filter((p) => p.life > 0);

    fwParticles.forEach((p) => {

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.035;
        p.vx *= 0.99;
        p.life -= p.decay;

        fwCtx.globalAlpha = Math.max(p.life, 0);
        fwCtx.fillStyle = p.color;

        fwCtx.beginPath();
        fwCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        fwCtx.fill();
    });

    fwCtx.globalAlpha = 1;

    if (fwRunning || fwParticles.length > 0) {
        fwFrame = requestAnimationFrame(drawFireworks);
    } else {
        fwCtx.clearRect(0, 0, fwW, fwH);
    }
}

function startFireworks() {

    stopFireworks();
    sizeFireworks();

    fwRunning = true;

    spawnFirework();

    fwSpawn = setInterval(spawnFirework, 650);

    // stop making new fireworks after 14 seconds
    fwStop = setTimeout(() => {
        fwRunning = false;
        clearInterval(fwSpawn);
    }, 14000);

    fwFrame = requestAnimationFrame(drawFireworks);
}

function stopFireworks() {

    clearInterval(fwSpawn);
    clearTimeout(fwStop);
    cancelAnimationFrame(fwFrame);

    fwRunning = false;
    fwParticles = [];

    fwCtx.clearRect(0, 0, fwW, fwH);
}


// ---------- FINAL LINE (types itself out) ----------

function typeFinalLine() {

    const chars = Array.from(finalLine);

    let i = 0;

    giftboxEnding.textContent = "";

    function step() {

        i++;

        giftboxEnding.textContent = chars.slice(0, i).join("");

        if (i < chars.length) {

            endTypeTimer = setTimeout(step, 55);

        } else {

            // when typing is done, show the two buttons
            endTypeTimer = setTimeout(() => {
                endActions.classList.remove("hidden");
            }, 700);
        }
    }

    // wait for the certificate to pop up first
    endTypeTimer = setTimeout(step, 1800);
}


// ---------- START / STOP THE WHOLE ENDING ----------

giftbox.addEventListener("click", () => {

    if (endingStarted) return;

    endingStarted = true;

    startFireworks();

    playBirthdaySong(0.12);

    typeFinalLine();
});

function stopEnding() {

    endingStarted = false;

    clearTimeout(endTypeTimer);

    stopFireworks();
    stopMusic();

    giftboxEnding.textContent = "";

    endActions.classList.add("hidden");
}

closeGiftbox.addEventListener("click", stopEnding);
birthdayGiftBtn.addEventListener("click", stopEnding);


// ---------- THE TWO BUTTONS ----------

backToFilesBtn.addEventListener("click", () => {

    stopEnding();

    giftboxPanel.classList.add("hidden");
    giftPanel.classList.add("hidden");

    // closing the party panel also resets the cake scene
    closeParty.click();
});

readAgainBtn.addEventListener("click", () => {

    stopEnding();

    giftboxPanel.classList.add("hidden");

    resetCard();

    giftPanel.classList.remove("hidden");
});

// ===== CERTIFICATE ZOOM =====

const certificate = document.getElementById("certificate");

certificate.addEventListener("click", () => {

    const zoomed = giftboxPanel.classList.toggle("zoom");

    certificate.scrollTop = 0;
    certificate.scrollLeft = 0;

    giftboxHint.textContent = zoomed
        ? "Tap again to zoom out 🔍"
        : "Tap the certificate to zoom in 🔍";
});

// after the gift opens, tell her she can zoom
giftbox.addEventListener("click", () => {

    setTimeout(() => {

        if (!giftboxPanel.classList.contains("zoom")) {
            giftboxHint.textContent = "Tap the certificate to zoom in 🔍";
        }

    }, 1800);
});

// always start un-zoomed
function clearZoom() {
    giftboxPanel.classList.remove("zoom");
}

closeGiftbox.addEventListener("click", clearZoom);
birthdayGiftBtn.addEventListener("click", clearZoom);

// ===== SLICE SOUND EFFECT =====

let sliceCtx = null;

// get the sound ready as soon as she touches the knife
// (phones only allow sound after a touch)
function prepareSliceSound() {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!sliceCtx) sliceCtx = new AudioContextClass();

    if (sliceCtx.state === "suspended") sliceCtx.resume();
}

knife.addEventListener("pointerdown", prepareSliceSound);

function playSliceSound() {

    if (!sliceCtx) prepareSliceSound();

    if (!sliceCtx) return;

    const ctx = sliceCtx;
    const now = ctx.currentTime;

    // 1) swish: short noise, sweeping from high to low
    const length = Math.floor(ctx.sampleRate * 0.22);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();

    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();

    filter.type = "bandpass";
    filter.Q.value = 1.2;
    filter.frequency.setValueAtTime(4200, now);
    filter.frequency.exponentialRampToValueAtTime(900, now + 0.2);

    const noiseGain = ctx.createGain();

    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.5, now + 0.03);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);

    // 2) soft thud
    const thud = ctx.createOscillator();
    const thudGain = ctx.createGain();

    thud.type = "sine";
    thud.frequency.setValueAtTime(150, now + 0.14);
    thud.frequency.exponentialRampToValueAtTime(55, now + 0.30);

    thudGain.gain.setValueAtTime(0.0001, now + 0.14);
    thudGain.gain.exponentialRampToValueAtTime(0.6, now + 0.16);
    thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

    thud.connect(thudGain);
    thudGain.connect(ctx.destination);

    thud.start(now + 0.14);
    thud.stop(now + 0.34);

    // 3) sparkly chime
    [1046.5, 1318.5, 1568].forEach((frequency, i) => {

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const t = now + 0.26 + i * 0.09;

        osc.type = "triangle";
        osc.frequency.value = frequency;

        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.4);
    });
}

// ===== PASSCODE + MUSIC + CLICK SOUNDS =====

// ✏️ EDIT THESE
const correctPasscode = "0210";   // her birthday: date + month (2 Oct = 0210). You can add the year, like "02102005"
const wrongMessage = "Hmm... wrong code! 😏 Hint: your birthday (date + month)";

const AUDIO_GUITAR = "Audio/guitar_tone.mp3";
const AUDIO_BIRTHDAY = "Audio/birthday-song.mp3";


// ---------- PASSCODE ----------

const passcodeScreen = document.getElementById("passcodeScreen");
const passcodeDots = document.getElementById("passcodeDots");
const passcodeError = document.getElementById("passcodeError");
const keypad = document.getElementById("keypad");

let typed = "";
let unlocked = false;

// one circle for each digit of the code
for (let i = 0; i < correctPasscode.length; i++) {

    const dot = document.createElement("div");

    dot.className = "dot";

    passcodeDots.appendChild(dot);
}

function updateDots() {

    const dots = passcodeDots.querySelectorAll(".dot");

    dots.forEach((dot, i) => {

        if (i < typed.length) {
            dot.textContent = "🐥";
            dot.classList.add("filled");
        } else {
            dot.textContent = "";
            dot.classList.remove("filled");
        }
    });
}

function addDigit(digit) {

    if (unlocked || typed.length >= correctPasscode.length) return;

    typed += digit;

    passcodeError.textContent = "";

    updateDots();

    if (typed.length === correctPasscode.length) {
        checkPasscode();
    }
}

function removeDigit() {

    if (unlocked) return;

    typed = typed.slice(0, -1);

    updateDots();
}

function clearDigits() {

    if (unlocked) return;

    typed = "";

    updateDots();
}

function checkPasscode() {

    if (typed === correctPasscode) {

        unlockSite();

    } else {

        passcodeError.textContent = wrongMessage;

        keypad.classList.add("shake");

        setTimeout(() => {

            keypad.classList.remove("shake");

            typed = "";

            updateDots();

        }, 450);
    }
}

function unlockSite() {

    unlocked = true;

    passcodeDots.querySelectorAll(".dot").forEach((dot) => {
        dot.classList.add("correct");
    });

    passcodeError.classList.add("ok");
    passcodeError.textContent = "Access granted! 🐥✨";

    // music starts right here, inside her tap (phones only allow that)
    startGuitar();

    setTimeout(() => {
        passcodeScreen.classList.add("leaving");
    }, 700);

    setTimeout(() => {
        passcodeScreen.classList.add("hidden");
        introScreen.classList.remove("hidden");
    }, 1500);
}

keypad.addEventListener("click", (e) => {

    const button = e.target.closest(".key");

    if (!button) return;

    if (button.id === "keyDelete") {
        removeDigit();
    } else if (button.id === "keyClear") {
        clearDigits();
    } else if (button.dataset.value) {
        addDigit(button.dataset.value);
    }
});

// keyboard also works (for computers)
document.addEventListener("keydown", (e) => {

    if (passcodeScreen.classList.contains("hidden")) return;

    if (/^[0-9]$/.test(e.key)) addDigit(e.key);

    if (e.key === "Backspace") removeDigit();
});


// ---------- GUITAR MUSIC (loops until she taps ???) ----------

const guitarAudio = new Audio(AUDIO_GUITAR);

guitarAudio.loop = true;
guitarAudio.volume = 0.6;
guitarAudio.preload = "auto";

let guitarFade = null;

function startGuitar() {

    guitarAudio.play().catch((err) => {
        console.log("Guitar music could not play:", err);
    });
}

function fadeOutGuitar() {

    clearInterval(guitarFade);

    guitarFade = setInterval(() => {

        guitarAudio.volume = Math.max(0, guitarAudio.volume - 0.05);

        if (guitarAudio.volume <= 0.02) {

            clearInterval(guitarFade);

            guitarAudio.pause();
            guitarAudio.currentTime = 0;
        }

    }, 100);
}

// when she taps the black ??? card, the guitar fades away
secretFile.addEventListener("click", fadeOutGuitar);


// ---------- BIRTHDAY SONG (your mp3 replaces the old melody) ----------
// These two functions have the same names as the old ones,
// so the newer versions below take over automatically.

const birthdayAudio = new Audio(AUDIO_BIRTHDAY);

birthdayAudio.preload = "auto";

// 0.25 = full volume, 0.12 = about half
function playBirthdaySong(volume = 0.25) {

    stopMusic();

    birthdayAudio.volume = Math.min(1, volume / 0.25);
    birthdayAudio.currentTime = 0;

    birthdayAudio.play().catch((err) => {
        console.log("Birthday song could not play:", err);
    });
}

function stopMusic() {

    if (audioCtx) {
        audioCtx.close();
        audioCtx = null;
    }

    birthdayAudio.pause();
    birthdayAudio.currentTime = 0;
}


// ---------- SMALL CLICK SOUND ----------

let uiCtx = null;

function playClickSound() {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!uiCtx) uiCtx = new AudioContextClass();

    if (uiCtx.state === "suspended") uiCtx.resume();

    const now = uiCtx.currentTime;

    const osc = uiCtx.createOscillator();
    const gain = uiCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(820, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.07);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    osc.connect(gain);
    gain.connect(uiCtx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
}

document.addEventListener("pointerdown", (e) => {

    if (e.target.closest("button, .key, .file-card, .memory-card, .character, .knife, .giftbox, .certificate, .letter-card, .card-cover")) {
        playClickSound();
    }
});


// ===== BACKGROUND BUTTERFLIES =====

const butterflyWishes = [
    "Happy Birthday\nMy Dear Bestie! ✨",
    "Happy Birthday\nChuzi! 🐥",
    "Happy Birthday\nFilly! 🐴",
    "Happy Birthday\nUllu! 🦉",
    "Happy Birthday\nLady Don! 😎",
    "Happy Birthday\nMs. Ln! 📐",
    "Happy Birthday\nMs. Dramebaaz! 🎭",
    "Happy Birthday\nMs. Snapiee! 📸"
];

const BUTTERFLY_COUNT = 42;

const butterflyLayer = document.createElement("div");
butterflyLayer.className = "butterfly-layer";
filesScreen.appendChild(butterflyLayer);

const butterflyHint = document.createElement("p");
butterflyHint.className = "butterfly-hint";
butterflyHint.textContent = "🦋 Tap a butterfly if you dare... 🦋";
filesScreen.querySelector(".files-header").appendChild(butterflyHint);

const butterflies = [];

function createButterfly() {

    const el = document.createElement("div");

    el.className = "butterfly";

    el.innerHTML = `
        <div class="wing wing-left"></div>
        <div class="wing wing-right"></div>
        <div class="b-body"></div>
        <div class="wish"></div>
    `;

    butterflyLayer.appendChild(el);

    const b = {
        el: el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        big: false
    };

    if (Math.abs(b.vx) < 0.2) b.vx = 0.3;
    if (Math.abs(b.vy) < 0.2) b.vy = 0.3;

    el.addEventListener("click", () => enlargeButterfly(b));

    butterflies.push(b);
}

for (let i = 0; i < BUTTERFLY_COUNT; i++) {
    createButterfly();
}

function moveButterflies() {

    butterflies.forEach((b) => {

        if (!b.big) {

            b.x += b.vx;
            b.y += b.vy;

            if (b.x < 0 || b.x > window.innerWidth - 30) b.vx *= -1;
            if (b.y < 0 || b.y > window.innerHeight - 30) b.vy *= -1;

            b.x = Math.max(0, Math.min(b.x, window.innerWidth - 30));
            b.y = Math.max(0, Math.min(b.y, window.innerHeight - 30));

            const angle = Math.atan2(b.vy, b.vx) * 180 / Math.PI;

            b.el.style.transform =
                "translate(" + b.x + "px," + b.y + "px) rotate(" + (angle * 0.15) + "deg)";
        }
    });

    requestAnimationFrame(moveButterflies);
}

moveButterflies();

let butterflyCtx = null;

function playButterflyChime() {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!butterflyCtx) butterflyCtx = new AudioContextClass();
    if (butterflyCtx.state === "suspended") butterflyCtx.resume();

    const notes = [987.77, 1244.51, 1567.98, 2093.00];
    const now = butterflyCtx.currentTime;

    notes.forEach((frequency, i) => {

        const osc = butterflyCtx.createOscillator();
        const gain = butterflyCtx.createGain();

        const t = now + i * 0.09;

        osc.type = "sine";
        osc.frequency.value = frequency;

        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);

        osc.connect(gain);
        gain.connect(butterflyCtx.destination);

        osc.start(t);
        osc.stop(t + 0.55);
    });
}

const wishColors = ["#ffffff", "#fff176", "#ff8fab", "#7ee8fa", "#c8f7c5", "#ffd6a5", "#d9b8ff"];

function enlargeButterfly(b) {

    if (b.big) return;

    b.big = true;

    b.el.classList.add("big");
    b.el.style.transform = "translate(" + b.x + "px," + b.y + "px) scale(3)";

    const wishEl = b.el.querySelector(".wish");
    const text = butterflyWishes[Math.floor(Math.random() * butterflyWishes.length)];

    wishEl.textContent = text;
    wishEl.style.color = wishColors[Math.floor(Math.random() * wishColors.length)];
    wishEl.classList.add("show");

    playButterflyChime();

    setTimeout(() => {

        b.big = false;

        b.el.classList.remove("big");
        wishEl.classList.remove("show");

        b.vx = (Math.random() - 0.5) * 1.4;
        b.vy = (Math.random() - 0.5) * 1.4;

    }, 3200);
}

// ===== BONK SOUND =====

let bonkCtx = null;

function playBonkSound() {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!bonkCtx) bonkCtx = new AudioContextClass();
    if (bonkCtx.state === "suspended") bonkCtx.resume();

    const ctx = bonkCtx;
    const now = ctx.currentTime;

    // low thud
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.18);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.6, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);

    // small comic "boing" on top
    const wobble = ctx.createOscillator();
    const wobbleGain = ctx.createGain();

    wobble.type = "triangle";
    wobble.frequency.setValueAtTime(500, now + 0.03);
    wobble.frequency.exponentialRampToValueAtTime(300, now + 0.2);

    wobbleGain.gain.setValueAtTime(0.0001, now + 0.03);
    wobbleGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
    wobbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    wobble.connect(wobbleGain);
    wobbleGain.connect(ctx.destination);

    wobble.start(now + 0.03);
    wobble.stop(now + 0.3);
}