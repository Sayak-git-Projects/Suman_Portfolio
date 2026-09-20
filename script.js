/* =========================================================
   SUMAN KUNDU PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   FOOTER YEAR
========================================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================================
   MOBILE / FULLSCREEN MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const menuPanel = document.getElementById("menuPanel");

const menuLinks =
    document.querySelectorAll(
        ".menu-navigation a"
    );


if (menuBtn && menuPanel) {

    menuBtn.addEventListener(
        "click",
        () => {

            const isOpen =
                menuPanel.classList.toggle(
                    "open"
                );

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );


    menuLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menuPanel.classList.remove(
                        "open"
                    );

                    menuBtn.classList.remove(
                        "active"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        menuPanel?.classList.remove(
            "open"
        );

        menuBtn?.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "menu-open"
        );


        chatWindow?.classList.remove(
            "open"
        );

    }
);


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollLine =
    document.getElementById(
        "scrollLine"
    );


function updateScrollProgress() {

    if (!scrollLine) {
        return;
    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


    if (documentHeight <= 0) {
        return;
    }


    const progress =
        (scrollTop / documentHeight) * 100;


    scrollLine.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
        passive: true
    }
);


updateScrollProgress();


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.getElementById(
        "cursor"
    );


const cursorDot =
    document.getElementById(
        "cursorDot"
    );


const hasFinePointer =
    window.matchMedia(
        "(pointer: fine)"
    ).matches;


if (
    cursor &&
    cursorDot &&
    hasFinePointer
) {

    let mouseX = 0;

    let mouseY = 0;

    let cursorX = 0;

    let cursorY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;

            mouseY = event.clientY;


            cursorDot.style.left =
                `${mouseX}px`;

            cursorDot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        cursorX +=
            (mouseX - cursorX) * .15;

        cursorY +=
            (mouseY - cursorY) * .15;


        cursor.style.left =
            `${cursorX}px`;

        cursor.style.top =
            `${cursorY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const hoverElements =
        document.querySelectorAll(
            "a, button"
        );


    hoverElements.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.style.width =
                        "55px";

                    cursor.style.height =
                        "55px";

                    cursor.style.borderColor =
                        "#22d3ee";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.style.width =
                        "35px";

                    cursor.style.height =
                        "35px";

                    cursor.style.borderColor =
                        "rgba(255,255,255,.6)";

                }
            );

        }
    );

}


/* =========================================================
   PROFILE CARD MOUSE EFFECT
========================================================= */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


if (
    profileCard &&
    hasFinePointer
) {

    profileCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                profileCard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const rotateX =
                ((y / rect.height) - .5) * -5;


            const rotateY =
                ((x / rect.width) - .5) * 5;


            profileCard.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
                `;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "";

        }
    );

}


/* =========================================================
   CHATBOT
========================================================= */

const chatButton =
    document.getElementById(
        "chatButton"
    );


const chatWindow =
    document.getElementById(
        "chatWindow"
    );


const chatClose =
    document.getElementById(
        "chatClose"
    );


const chatBody =
    document.getElementById(
        "chatBody"
    );


const chatInput =
    document.getElementById(
        "chatInput"
    );


const chatSend =
    document.getElementById(
        "chatSend"
    );


const chatOptions =
    document.querySelectorAll(
        "[data-chat]"
    );


/* =========================================================
   OPEN CHAT
========================================================= */

chatButton?.addEventListener(
    "click",
    () => {

        chatWindow?.classList.toggle(
            "open"
        );


        if (
            chatWindow?.classList.contains(
                "open"
            )
        ) {

            setTimeout(
                () => {

                    chatInput?.focus();

                },
                250
            );

        }

    }
);


/* =========================================================
   CLOSE CHAT
========================================================= */

chatClose?.addEventListener(
    "click",
    () => {

        chatWindow?.classList.remove(
            "open"
        );

    }
);


/* =========================================================
   SAFE TEXT MESSAGE
========================================================= */

function addUserMessage(
    message
) {

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "chat-user";


    const bubble =
        document.createElement(
            "div"
        );


    bubble.className =
        "chat-user-bubble";


    /*
       IMPORTANT:
       textContent is used instead of
       innerHTML so user input cannot
       inject HTML/JavaScript.
    */

    bubble.textContent =
        message;


    wrapper.appendChild(
        bubble
    );


    chatBody.appendChild(
        wrapper
    );


    scrollChat();

}


/* =========================================================
   BOT MESSAGE
========================================================= */

function addBotMessage(
    message
) {

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "bot-message";


    wrapper.innerHTML = `

        <div class="bot-mini-avatar">

            <i class="fa-solid fa-robot"></i>

        </div>

        <div class="chat-bubble">

            ${message}

        </div>

    `;


    chatBody.appendChild(
        wrapper
    );


    scrollChat();

}


/* =========================================================
   SCROLL CHAT
========================================================= */

function scrollChat() {

    if (!chatBody) {
        return;
    }


    chatBody.scrollTo({

        top:
            chatBody.scrollHeight,

        behavior:
            "smooth"

    });

}


/* =========================================================
   BOT TYPING
========================================================= */

function botReply(
    message,
    delay = 650
) {

    const typing =
        document.createElement(
            "div"
        );


    typing.className =
        "bot-message typing-message";


    typing.innerHTML = `

        <div class="bot-mini-avatar">

            <i class="fa-solid fa-robot"></i>

        </div>

        <div class="chat-bubble">

            <span>•••</span>

        </div>

    `;


    chatBody.appendChild(
        typing
    );


    scrollChat();


    setTimeout(
        () => {

            typing.remove();

            addBotMessage(
                message
            );

        },
        delay
    );

}


/* =========================================================
   CHAT OPTIONS
========================================================= */

chatOptions.forEach(
    option => {

        option.addEventListener(
            "click",
            () => {

                const action =
                    option.dataset.chat;


                if (
                    action === "about"
                ) {

                    addUserMessage(
                        "Tell me about Suman"
                    );


                    botReply(
                        `
                        👋 Suman Kundu is a
                        Computer Science and
                        Engineering professional
                        interested in software
                        development, data,
                        machine learning and IoT.
                        <br><br>
                        He focuses on building
                        practical systems that
                        connect software with
                        real-world problems.
                        `
                    );

                }


                else if (
                    action === "projects"
                ) {

                    addUserMessage(
                        "Show me your projects"
                    );


                    botReply(
                        `
                        🚀 Featured projects:
                        <br><br>
                        • CO₂-to-Light
                        <br>
                        • Smart Security Robot
                        <br>
                        • Flower Shop E-Commerce
                        <br><br>
                        Scroll to the
                        <strong>Work</strong>
                        section to explore them.
                        `
                    );

                }


                else if (
                    action === "skills"
                ) {

                    addUserMessage(
                        "What technologies do you use?"
                    );


                    botReply(
                        `
                        💻 Main technologies:
                        <br><br>
                        <strong>
                        Python · PHP · JavaScript
                        </strong>
                        <br>
                        Django · FastAPI ·
                        Spring Boot
                        <br>
                        MySQL · MongoDB · Firebase
                        <br>
                        Pandas · NumPy · Power BI
                        <br>
                        Git · GitHub · Figma
                        `
                    );

                }


                else if (
                    action === "contact"
                ) {

                    addUserMessage(
                        "How can I contact Suman?"
                    );


                    botReply(
                        `
                        🤝 You can contact Suman
                        directly:
                        <br><br>

                        📧
                        <a
                            href="mailto:skundu23655@gmail.com"
                            style="color:#22d3ee"
                        >
                            Email
                        </a>

                        <br>

                        📞
                        <a
                            href="tel:+919064481584"
                            style="color:#22d3ee"
                        >
                            Call
                        </a>

                        <br>

                        💼
                        <a
                            href="https://linkedin.com/in/suman-kundu-29462a287"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="color:#22d3ee"
                        >
                            LinkedIn
                        </a>
                        `
                    );

                }


                else if (
                    action === "resume"
                ) {

                    addUserMessage(
                        "I want to see the resume"
                    );


                    botReply(
                        `
                        📄 You can add your
                        resume PDF as:
                        <br><br>

                        <code>
                        assets/Suman-Kundu-CV.pdf
                        </code>

                        <br><br>

                        Then create a button
                        pointing to that file.
                        `
                    );

                }

            }
        );

    }
);


/* =========================================================
   FREE TEXT CHAT
========================================================= */

function sendChatMessage() {

    if (!chatInput) {
        return;
    }


    const message =
        chatInput.value.trim();


    if (!message) {
        return;
    }


    addUserMessage(
        message
    );


    chatInput.value = "";


    const lower =
        message.toLowerCase();


    /* ABOUT */

    if (
        lower.includes("about") ||
        lower.includes("who is") ||
        lower.includes("suman")
    ) {

        botReply(
            `
            👋 Suman Kundu is a
            Computer Science and
            Engineering professional
            working across software,
            web, data and IoT.
            `
        );

        return;

    }


    /* PROJECT */

    if (
        lower.includes("project") ||
        lower.includes("work")
    ) {

        botReply(
            `
            🚀 Suman's featured projects
            include CO₂-to-Light,
            Smart Security Robot and
            Flower Shop E-Commerce.
            `
        );

        return;

    }


    /* SKILLS */

    if (
        lower.includes("skill") ||
        lower.includes("technology") ||
        lower.includes("tech") ||
        lower.includes("stack")
    ) {

        botReply(
            `
            💻 Suman works with
            Python, PHP, JavaScript,
            Django, FastAPI, Spring Boot,
            MySQL, MongoDB, Pandas,
            NumPy, Power BI and Git.
            `
        );

        return;

    }


    /* CONTACT */

    if (
        lower.includes("contact") ||
        lower.includes("email") ||
        lower.includes("mail") ||
        lower.includes("phone") ||
        lower.includes("call")
    ) {

        botReply(
            `
            📩 Contact Suman:
            <br><br>

            <a
                href="mailto:skundu23655@gmail.com"
                style="color:#22d3ee"
            >
                skundu23655@gmail.com
            </a>

            <br><br>

            📞
            <a
                href="tel:+919064481584"
                style="color:#22d3ee"
            >
                +91 9064481584
            </a>
            `
        );

        return;

    }


    /* RESUME */

    if (
        lower.includes("resume") ||
        lower.includes("cv")
    ) {

        botReply(
            `
            📄 Add your CV file as:
            <br><br>

            <strong>
            assets/Suman-Kundu-CV.pdf
            </strong>
            <br><br>

            Then the resume button
            can directly download it.
            `
        );

        return;

    }


    /* GREETING */

    if (
        lower.includes("hello") ||
        lower.includes("hi") ||
        lower.includes("hey")
    ) {

        botReply(
            `
            👋 Hello!
            <br><br>
            I'm Suman's digital
            helping-hand assistant.
            <br><br>
            Ask me about projects,
            skills, resume or contact.
            `
        );

        return;

    }


    /* DEFAULT */

    botReply(
        `
        🤖 I can help you with:
        <br><br>
        • About Suman
        <br>
        • Projects
        <br>
        • Skills
        <br>
        • Resume
        <br>
        • Contact
        <br><br>

        Try asking:
        <strong>
        "What projects has Suman built?"
        </strong>
        `
    );

}


/* =========================================================
   SEND BUTTON
========================================================= */

chatSend?.addEventListener(
    "click",
    sendChatMessage
);


/* =========================================================
   ENTER KEY
========================================================= */

chatInput?.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            sendChatMessage();

        }

    }
);


/* =========================================================
   CLOSE CHAT WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !chatWindow ||
            !chatButton
        ) {
            return;
        }


        if (
            !chatWindow.classList.contains(
                "open"
            )
        ) {
            return;
        }


        const clickedInsideChat =
            chatWindow.contains(
                event.target
            );


        const clickedButton =
            chatButton.contains(
                event.target
            );


        if (
            !clickedInsideChat &&
            !clickedButton
        ) {

            chatWindow.classList.remove(
                "open"
            );

        }

    }
);
