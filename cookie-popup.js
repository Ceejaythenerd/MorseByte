document.addEventListener("DOMContentLoaded", () => {
    // Check if user has already made a choice
    if (localStorage.getItem("morsebyte_cookie_consent")) {
        return;
    }

    // Create the cookie popup container
    const cookiePopup = document.createElement("div");
    cookiePopup.id = "cookie-popup";
    cookiePopup.className = "fixed bottom-0 left-0 right-0 z-[99999] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm bg-[#0F172A] border border-[#CBD5E1]/20 p-6 sm:rounded-2xl shadow-2xl opacity-0 translate-y-10 pointer-events-none transition-all duration-700 ease-out";
    
    // Create the content
    cookiePopup.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-3">
                <i data-lucide="cookie" class="w-6 h-6 text-[#4169E1]"></i>
                <h3 class="font-serif text-xl text-white">Privacy Excellence</h3>
            </div>
            <button id="cookie-close" class="text-[#CBD5E1]/50 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#4169E1] rounded-full p-1">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>
        <p class="text-sm text-[#CBD5E1]/80 font-sans leading-relaxed mb-6 font-light">
            We use sophisticated functional and analytical cookies to optimize your enterprise experience on our digital ecosystem. 
            <a href="#" class="text-[#4169E1] hover:text-white transition-colors underline decoration-white/20 underline-offset-2">Read our policy</a>.
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
            <button id="cookie-accept" class="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#4169E1] text-white text-xs tracking-widest uppercase font-semibold hover:bg-white hover:text-[#0F172A] transition-all duration-500 shadow-soft focus:outline-none focus:ring-2 focus:ring-white">
                Accept All
            </button>
            <button id="cookie-decline" class="w-full sm:w-auto px-5 py-2.5 rounded-full bg-transparent border border-[#CBD5E1]/30 text-[#CBD5E1] text-xs tracking-widest uppercase font-semibold hover:bg-[#CBD5E1]/10 hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white">
                Decline
            </button>
        </div>
    `;

    // Append to body
    document.body.appendChild(cookiePopup);

    // Re-initialize Lucide icons for the newly injected HTML
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Small delay to allow CSS transitions to trigger after DOM insertion
    setTimeout(() => {
        cookiePopup.classList.remove("opacity-0", "translate-y-10", "pointer-events-none");
        cookiePopup.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
    }, 500);

    const closePopup = () => {
        cookiePopup.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        cookiePopup.classList.add("opacity-0", "translate-y-10", "pointer-events-none");
        setTimeout(() => {
            if (cookiePopup.parentNode) {
                cookiePopup.parentNode.removeChild(cookiePopup);
            }
        }, 700); // Wait for transition
    };

    const handleConsent = (status) => {
        localStorage.setItem("morsebyte_cookie_consent", status);
        closePopup();
    };

    // Event Listeners
    document.getElementById("cookie-accept").addEventListener("click", () => handleConsent("accepted"));
    document.getElementById("cookie-decline").addEventListener("click", () => handleConsent("declined"));
    document.getElementById("cookie-close").addEventListener("click", () => closePopup());
});
