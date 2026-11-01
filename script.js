
const photoIds = [
    "11H1uUK50UKNIu4KurOoCu4Q-sLxDqKG3",
    "11d8m5rwQRGJHfYdL1GOufDgGKHhjOsp8",
    "122-BQYYQ5spesmpSOON1DsH00_THVNWH",
    "12QaGE0olIerT5yKBzc9smw_VJzb_yssM",
    "12uTavKtl03q7ZPx_gA1aSE9EMQZ0K0od",
    "14B2iuPcJKwBE9YAPx6Pyd6Iey2pvA0a4",
    "19JxE-9UaOJ3n08uCRyNE4dKmts1uiMuh",
    "19kbHknJUdUpmyV3au7kGjHe-Qcvm-85Y",
    "1CLhHbLLZbxWudyF2v_hr-D8E3HK0Cfhw",
    "1DZgg3z9idBaFIRNkvFRWpvU8ZmvABKw9",
    "1Kp5b2XJEYWU_z9sROOBEb0m9DkBkmcJ_",
    "1KrKJOOBFGV1wtx9vrIaG7rk2G9Nh0fRn",
    "1MYTBsCvLgIxNr6Ty0ytbhwLO_PXER3Rt",
    "1RiiapHpgXTr7CMzq8QRoePkn99xfZZ0L",
    "1S-CM4aFe5hMtk3NG4d6ncPgYvKhJ1eh8",
    "1Slaq0qJye0BoAKW4BRyORm8VGNC6D1fi",
    "1TA1Pj3fY49C7JfvQqKKiNeMdfMUOdmHI",
    "1UtI55DjY2x19cOpBjTS7WHP6Sj_ae0uM",
    "1UtM-nljqV56qWGG5IMA0zpIS1SVwnNZY",
    "1V9ssVNWR6NWNRIt3o6nz9qXJvbtHAsFa",
    "1W0Mox2W9Lq2EuyNQAkSMVBPE6AOI7-8V",
    "1Ymxiwv0R4A4UdVE7uu8lhGRZzoOSPT35",
    "1b9UbYGun9VNo3vFc1Jk8aeKfxAmQW4mu",
    "1bSqfc5C5mcdFCJY4FdNdDZ2VD9AMQ7vH",
    "1cI-XLt-HLdlWvxNcwatpV9Ht9Zt4f3cp",
    "1fG0NS0S7EG67FScHkzgdAk8RZ2sB54FZ",
    "1fPLcY8btuiLw3up_1SxicqIgFldU0ZuL",
    "1fgZcNuQjgaR7rLiKfjrHMeB21xYKSTEi",
    "1hGiDHWW3aAjDFIZgZfF99Z54eKrKz0oN",
    "1hyrLJenooqDy1lYTTs7WW8OsUSystLFl",
    "1jqJ16DNvyhCMEOeCh-gEoWJCnygJDrwl",
    "1kkDyaiMXE5UQ8XdxL7Jz742lbTk9OIQR",
    "1lnw42Q56A821NnUolyAYO7VuijW7IU6v",
    "1m4GiU6adTOJzooc019KGSISxPy8lLbcc",
    "1qTf_6jvduZu-KocxgDiUs5Zc88Fmg3VX",
    "1rfPlpcdbn3ORIdx6Nse9VL5nuGd0svig",
    "1rfdqdhhAsSR4yUAWkFsS0g_xKS-BzXUI",
    "1uh-8849w-htzkGPL2S7Dov-izowTNsyJ",
    "1wbh_W5Q1n7ItKXsdSqHZICK8Mc0auyhd",
    "1xD1wQHwvNS-OIoTxn02QR90QVz-1_mBF",
    "1ykBk73PxrU8GzwNNhNoynh0FxBLXb2d3"
];

const videoLinks = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4"
];

const captions = [
    "The Woman Behind His Smile 🤍",
    "💋🫂",
    "Mini version of him😙",
    "Just Him Just Perfect 💙😋",
    "❤️🫂",
    "Appa💞",
    "A Picture Full of Love 🫶🏻",
    "Better Together Always! 😌",
    "A Frame Full of Happiness🥹",
    "💙"
];

// FRIENDSHIP BGM - MP3
const friendshipBgm = new Audio("./friendship-bgm.mp3");

friendshipBgm.preload = "auto";
friendshipBgm.loop = false;
friendshipBgm.volume = 0.65;

document.addEventListener("DOMContentLoaded", () => {

    const photoWall = document.getElementById("photoWall");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseContent = document.getElementById("surpriseContent");
    const videoGallery = document.getElementById("videoGallery");
    const topPhotos = document.getElementById("scrapbookTopPhotos");
    const bottomPhotos = document.getElementById("scrapbookBottomPhotos");
    const readMessageButton = document.getElementById("readMessageButton");
    const messageCard = document.getElementById("messageCard");
    const backButton = document.getElementById("backButton");

    // BACKGROUND PHOTOS
    photoIds.forEach((id) => {
        const img = document.createElement("img");

        img.src = `https://drive.google.com/thumbnail?id=${id}&sz=w500`;
        img.alt = "Birthday memory";
        img.loading = "lazy";

        photoWall.appendChild(img);
    });

    // SCRAPBOOK PHOTOS
    const scrapbookPhotos = [
        "Bg1.jpeg",
        "Bg2.jpeg",
        "Bg3.jpeg",
        "Bg4.jpeg",
        "Bg5.jpeg",
        "Bg6.jpeg",
        "Bg7.jpeg",
        "Bg8.jpeg",
        "Bg9.jpeg",
        "Bg10.jpeg"
    ];

    scrapbookPhotos.forEach((filename, index) => {

        const card = document.createElement("div");
        card.className = "polaroid";

        const img = document.createElement("img");
        img.src = `./${filename}`;
        img.alt = "Birthday memory";
        img.loading = "lazy";

        const caption = document.createElement("span");
        caption.textContent = captions[index];

        card.appendChild(img);
        card.appendChild(caption);

        if (index < 4) {
            topPhotos.appendChild(card);
        } else {
            bottomPhotos.appendChild(card);
        }
    });

    // CREATE VIDEOS
    videoLinks.forEach((link) => {

        const video = document.createElement("video");

        video.className = "video-frame";
        video.controls = true;
        video.playsInline = true;
        video.preload = "none";
        video.src = `./${link}`;
        video.setAttribute("controlsList", "nodownload");

        videoGallery.appendChild(video);
    });

    // PLAY BGM FROM 01:19
    function playFriendshipBgm() {

        friendshipBgm.pause();

        // Set starting time to 79 seconds
        friendshipBgm.currentTime = 79;

        // Play directly from the button click
        const playPromise = friendshipBgm.play();

        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                console.error("Friendship BGM playback error:", error);
            });
        }
    }

    // STOP BGM
    function stopFriendshipBgm() {
        friendshipBgm.pause();
        friendshipBgm.currentTime = 79;
    }

    // OPEN SURPRISE SCREEN
    surpriseButton.addEventListener("click", () => {

        welcomeScreen.style.display = "none";
        surpriseContent.style.display = "block";

        videoGallery.querySelectorAll("video").forEach((video) => {
            video.load();
        });

        messageCard.classList.remove("show");
        messageCard.style.display = "none";

        readMessageButton.style.display = "inline-block";

        surpriseContent.classList.remove("play-animations");
        void surpriseContent.offsetWidth;

        surpriseContent.classList.add("play-animations");

        window.scrollTo(0, 0);
    });

    // READ MY MESSAGE + PLAY BGM
    readMessageButton.addEventListener("click", () => {

        messageCard.style.display = "block";

        void messageCard.offsetWidth;

        messageCard.classList.add("show");
        readMessageButton.style.display = "none";

        // PLAY FROM 01:19
        playFriendshipBgm();

        setTimeout(() => {
            messageCard.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 300);
    });

    // BACK TO WELCOME SCREEN
    backButton.addEventListener("click", () => {

        // STOP BGM
        stopFriendshipBgm();

        surpriseContent.classList.remove("play-animations");

        messageCard.classList.remove("show");
        messageCard.style.display = "none";

        readMessageButton.style.display = "inline-block";
        surpriseContent.style.display = "none";
        welcomeScreen.style.display = "flex";

        // PAUSE ALL VIDEOS
        videoGallery.querySelectorAll("video").forEach((video) => {
            video.pause();
        });

        window.scrollTo(0, 0);
    });

});
