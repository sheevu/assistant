// Enhanced Leeila AI Agent Application with OpenAI Integration
// Mobile-First Responsive Design for Sudarshan AI Labs with High-Visibility Gradient Text

// Comprehensive service data
const servicesData = [
    {
        name: "Start Your Online Store",
        price: "₹89",
        originalPrice: "₹149",
        description: "Digital storefront in 2 min",
        category: "Website",
        features: ["Mobile-optimized website", "Product listings", "Payment gateway", "Local SEO", "Social media integration"],
        idealFor: "Small shops, kirana stores, local businesses",
        priceCategory: "budget",
        popularity: "high",
        setupTime: "2 minutes",
        monthlyFeature: true
    },
    {
        name: "Full Website Setup",
        price: "₹3,500",
        description: "Up to 5 pages, custom design",
        category: "Website",
        features: ["Custom design", "5 pages", "Mobile responsive", "Contact forms", "SEO optimized", "1 year hosting"],
        idealFor: "Established businesses, professionals, service providers",
        priceCategory: "premium",
        popularity: "high",
        setupTime: "3-5 days"
    },
    {
        name: "Landing Pages (Lead Gen)",
        price: "₹1,500–₹1,999",
        description: "Conversion-focused landing pages",
        category: "Website",
        features: ["High conversion design", "Lead capture forms", "Analytics integration", "A/B testing ready", "Mobile optimized"],
        idealFor: "Businesses running ad campaigns, lead generation",
        priceCategory: "standard",
        popularity: "medium",
        setupTime: "2-3 days"
    },
    {
        name: "Social Media Marketing",
        price: "from ₹999/month",
        description: "8+ posts, ad setup and management",
        category: "Marketing",
        features: ["8+ posts per month", "Ad campaign setup", "Content creation", "Performance reporting", "Hashtag research"],
        idealFor: "All businesses wanting online presence",
        priceCategory: "standard",
        popularity: "high",
        monthlyFeature: true,
        setupTime: "1 day"
    },
    {
        name: "SEO & Content Boost",
        price: "from ₹1,499/month",
        description: "Keyword optimization, blogging, backlinks",
        category: "Marketing",
        features: ["Keyword research", "Blog writing", "Backlink building", "Monthly reports", "Google My Business optimization"],
        idealFor: "Businesses wanting organic traffic growth",
        priceCategory: "standard",
        popularity: "high",
        monthlyFeature: true,
        setupTime: "1 week"
    },
    {
        name: "WhatsApp Business Bot Setup",
        price: "₹129 Basic / ₹599 Pro",
        description: "Auto-reply, payment integration, advanced features",
        category: "AI Solutions",
        features: ["Auto-reply setup", "Customer support automation", "Payment integration", "Multi-language support", "Analytics dashboard"],
        idealFor: "High customer inquiry volume businesses",
        priceCategory: "budget",
        popularity: "very-high",
        setupTime: "1 day"
    },
    {
        name: "Research/Articles Writing",
        price: "from ₹499",
        description: "DA80+ backlink, academic quality content",
        category: "Content",
        features: ["High-quality research", "SEO optimized", "Professional writing", "Quick delivery", "Plagiarism-free"],
        idealFor: "Businesses needing content marketing",
        priceCategory: "budget",
        popularity: "medium",
        setupTime: "2-3 days"
    },
    {
        name: "Resume Writing",
        price: "from ₹79",
        description: "Professional resume, quick delivery",
        category: "Content",
        features: ["ATS-friendly format", "Professional design", "Industry-specific", "Quick turnaround", "LinkedIn profile optimization"],
        idealFor: "Job seekers, professionals",
        priceCategory: "budget",
        popularity: "medium",
        setupTime: "24 hours"
    },
    {
        name: "AI Chatbot & Assistant Development",
        price: "from ₹499",
        description: "WhatsApp/website integration, multilingual",
        category: "AI Solutions",
        features: ["Custom AI responses", "Multi-platform integration", "Hindi/English support", "24/7 availability", "Learning capabilities"],
        idealFor: "Businesses wanting automated customer service",
        priceCategory: "budget",
        popularity: "high",
        setupTime: "2-5 days"
    },
    {
        name: "Excel & Sheets Automation Solutions",
        price: "from ₹1,999",
        description: "Dashboard creation, tracking systems",
        category: "Automation",
        features: ["Custom dashboards", "Automated reporting", "Data visualization", "Process optimization", "Training included"],
        idealFor: "Businesses with data management needs",
        priceCategory: "standard",
        popularity: "medium",
        setupTime: "3-7 days"
    },
    {
        name: "SaaS & AI Tool Development (Lite)",
        price: "from ₹2,999",
        description: "MVP/Prototype development, quick launch",
        category: "Development",
        features: ["MVP development", "AI integration", "Quick deployment", "Scalable architecture", "6 months support"],
        idealFor: "Startups, entrepreneurs with tech ideas",
        priceCategory: "premium",
        popularity: "medium",
        setupTime: "1-2 weeks"
    },
    {
        name: "Business Growth Consultation (+Free SEO)",
        price: "from ₹499",
        description: "Actionable business report with free SEO audit",
        category: "Consultation",
        features: ["Business analysis", "Growth strategies", "Free SEO audit", "Actionable recommendations", "Follow-up session"],
        idealFor: "Businesses planning digital transformation",
        priceCategory: "budget",
        popularity: "high",
        setupTime: "3-5 days"
    }
];

// Business type recommendations
const businessRecommendations = {
    kirana: {
        name: "Kirana Store",
        emoji: "🏪",
        recommended: ["Start Your Online Store", "WhatsApp Business Bot Setup", "Social Media Marketing"],
        benefits: "Increase sales by 40-60% with online ordering and delivery setup",
        story: "Ramesh Uncle's kirana store in Kanpur increased monthly revenue from ₹45,000 to ₹72,000 after going digital with our ₹89 package!"
    },
    restaurant: {
        name: "Restaurant",
        emoji: "🍽️",
        recommended: ["Start Your Online Store", "Social Media Marketing", "WhatsApp Business Bot Setup"],
        benefits: "Handle online orders, showcase menu, and automate reservations",
        story: "Sharma's Dhaba in Lucknow now gets 150+ online orders daily, increasing revenue by 80%!"
    },
    professional: {
        name: "Professional Service",
        emoji: "👔",
        recommended: ["Full Website Setup", "SEO & Content Boost", "Landing Pages (Lead Gen)"],
        benefits: "Build credibility and generate quality leads for your services",
        story: "CA Priya's practice grew from 50 to 200+ clients in 6 months with our professional website and SEO!"
    },
    retail: {
        name: "Retail Shop",
        emoji: "🛍️",
        recommended: ["Start Your Online Store", "Social Media Marketing", "WhatsApp Business Bot Setup"],
        benefits: "Expand customer reach beyond your locality with online presence",
        story: "Fashion Point in Agra increased sales by 120% during lockdown with online store setup!"
    },
    manufacturing: {
        name: "Manufacturing",
        emoji: "🏭",
        recommended: ["Full Website Setup", "Excel & Sheets Automation Solutions", "Business Growth Consultation (+Free SEO)"],
        benefits: "Streamline operations and reach B2B clients effectively",
        story: "Gupta Industries automated inventory management, reducing costs by ₹50,000/month!"
    },
    startup: {
        name: "Startup",
        emoji: "💡",
        recommended: ["SaaS & AI Tool Development (Lite)", "Full Website Setup", "Social Media Marketing"],
        benefits: "Build MVP quickly and establish strong digital presence",
        story: "EduTech startup from IIT Kanpur launched their AI learning platform in just 2 weeks!"
    }
};

// Enhanced Knowledge Base with Indian cultural elements and gradient text considerations
const enhancedKnowledgeBase = {
    "greeting": {
        keywords: ["hello", "hi", "namaste", "namastey", "हैलो", "नमस्ते", "leeila", "who are you"],
        responses: [
            {
                text: "Namastey 🙏 Main Leeila hoon, Sudarshan AI Labs ki advanced AI assistant! I'm here to help you transform your business digitally. हमारा मिशन है भारत के 600+ million लोगों को technology से जोड़ना।",
                followUp: "I can provide both quick answers and AI-powered responses! Which type of business do you run? I can provide personalized recommendations based on your needs!"
            }
        ]
    },
    "ai_features": {
        keywords: ["ai", "artificial intelligence", "machine learning", "ai-powered", "intelligent", "smart"],
        responses: [
            {
                text: "🤖 As Leeila AI Agent, I offer both pre-programmed responses और advanced AI capabilities! Here's what makes me special:",
                features: [
                    "🧠 AI-powered conversations using OpenAI technology",
                    "💬 Bilingual support (Hindi + English)",
                    "📊 Real-time business analysis and recommendations",
                    "🎯 Personalized solutions based on your business type",
                    "📈 Data-driven insights for growth strategies",
                    "🔄 Continuous learning from interactions",
                    "⚡ Instant responses with fallback options",
                    "🔒 Secure and private conversation handling"
                ],
                followUp: "Enable AI-powered responses in settings for enhanced conversations! Want to know more about any specific AI feature?"
            }
        ]
    },
    "signature_package": {
        keywords: ["89", "package", "signature", "uni-commerce", "basic", "cheapest", "affordable"],
        responses: [
            {
                text: "Our signature ₹89 Uni-commerce package is बहुत popular! यह specially designed है MSMEs के लिए:",
                features: [
                    "🌐 Mobile-optimized digital storefront (ready in 2 minutes!)",
                    "📋 Complete product/service listings with photos",
                    "💳 UPI + Card payment gateway (Paytm, PhonePe, GPay)",
                    "🔍 Local SEO optimization for Google discovery",
                    "📱 Facebook & Instagram integration",
                    "💬 Basic WhatsApp business setup",
                    "📊 Monthly sales dashboard",
                    "🛡️ Secure hosting & SSL certificate"
                ],
                followUp: "This package has helped 10,000+ businesses increase sales by 40-60%! Which feature interests you most?"
            }
        ]
    },
    "business_benefits": {
        keywords: ["help", "business", "benefits", "advantage", "profit", "sales", "revenue", "grow"],
        responses: [
            {
                text: "हमारे AI-powered solutions specifically Indian businesses को mind में रखकर बनाए गए हैं! Here's how we transform businesses:",
                features: [
                    "📈 Average 40-60% increase in monthly revenue",
                    "🌍 Reach customers beyond your local area",
                    "💰 Reduce operational costs with automation",
                    "📱 Tap into India's 500M+ mobile internet users",
                    "🔒 Build customer trust with secure payments",
                    "🎯 Compete with big brands using AI tools",
                    "📊 Make data-driven decisions with analytics",
                    "🗣️ Support in Hindi & regional languages"
                ],
                followUp: "Our success rate is 95%+ for MSMEs! Tell me about your business type for personalized AI-powered recommendations."
            }
        ]
    },
    "whatsapp_setup": {
        keywords: ["whatsapp", "bot", "automation", "chat", "customer service", "auto reply"],
        responses: [
            {
                text: "Our WhatsApp Business Bot is super popular! 90% of Indian customers prefer WhatsApp communication:",
                features: [
                    "🤖 AI-powered auto-reply for common questions (24/7)",
                    "📋 Intelligent order taking & confirmation",
                    "💳 Direct payment links in chat",
                    "🗣️ Hindi + English + regional language support",
                    "📊 Customer analytics & insights",
                    "🎯 Smart broadcast messages for offers",
                    "⏰ Schedule messages for festivals/sales",
                    "👥 Handle unlimited customer conversations"
                ],
                followUp: "Basic setup costs just ₹129, Pro version ₹599. Which features do you need most for your business?"
            }
        ]
    },
    "pricing_plans": {
        keywords: ["pricing", "cost", "price", "plans", "packages", "budget", "expensive", "cheap"],
        responses: [
            {
                text: "हमारी AI-enhanced pricing बहुत reasonable है! We believe in affordable technology for all:",
                features: [
                    "💰 ₹89/month: Complete online store + AI features + payments + SEO",
                    "🌐 ₹3,500: Professional 5-page website (one-time)",
                    "📈 ₹999/month: Social media marketing (8+ posts)",
                    "🔍 ₹1,499/month: SEO + content writing + backlinks",
                    "🤖 ₹129-₹599: WhatsApp bot (one-time setup)",
                    "📝 ₹79+: Professional resume writing",
                    "💼 ₹499+: Business consultation + free SEO audit",
                    "⚙️ ₹1,999+: Excel automation & dashboards"
                ],
                followUp: "All prices include GST and support. Want a custom quote for multiple services? I can calculate bundle discounts!"
            }
        ]
    }
};

// OpenAI Integration Class
class OpenAIIntegration {
    constructor() {
        this.apiKey = this.getStoredApiKey();
        this.model = localStorage.getItem('leeila_ai_model') || 'GPT-4.1-mini';
        this.usageCount = parseInt(localStorage.getItem('leeila_usage_count') || '0');
        this.lastUsageReset = localStorage.getItem('leeila_usage_reset') || new Date().toDateString();
        this.maxDailyUsage = 100;
        this.isConnected = false;
        
        this.resetDailyUsageIfNeeded();
        this.updateUI();
    }
    
    getStoredApiKey() {
        // Simple encoding for basic protection (not cryptographically secure)
        const encoded = sessionStorage.getItem('leeila_api_key');
        return encoded ? atob(encoded) : '';
    }
    
    setApiKey(key) {
        this.apiKey = key;
        if (key) {
            // Simple encoding for basic protection
            sessionStorage.setItem('leeila_api_key', btoa(key));
        } else {
            sessionStorage.removeItem('leeila_api_key');
        }
        this.updateUI();
    }
    
    setModel(model) {
        this.model = model;
        localStorage.setItem('leeila_ai_model', model);
    }
    
    resetDailyUsageIfNeeded() {
        const today = new Date().toDateString();
        if (this.lastUsageReset !== today) {
            this.usageCount = 0;
            this.lastUsageReset = today;
            localStorage.setItem('leeila_usage_count', '0');
            localStorage.setItem('leeila_usage_reset', today);
        }
    }
    
    incrementUsage() {
        this.usageCount++;
        localStorage.setItem('leeila_usage_count', this.usageCount.toString());
        this.updateUI();
    }
    
    canMakeRequest() {
        return this.apiKey && this.usageCount < this.maxDailyUsage;
    }
    
    async testConnection() {
        if (!this.apiKey) {
            throw new Error('API key is required');
        }
        
        try {
            const response = await fetch('https://api.openai.com/v1/models', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                this.isConnected = true;
                this.updateUI();
                return { success: true, message: 'Connection successful!' };
            } else {
                this.isConnected = false;
                this.updateUI();
                throw new Error(`API Error: ${response.status}`);
            }
        } catch (error) {
            this.isConnected = false;
            this.updateUI();
            throw error;
        }
    }
    
    async generateResponse(message, conversationHistory = []) {
        if (!this.canMakeRequest()) {
            throw new Error('API key missing or daily limit reached');
        }
        
        const systemPrompt = `You are Leeila, an AI assistant for Sudarshan AI Labs, a company that helps Indian MSMEs with digital transformation. You should:

1. Respond in a mix of Hindi and English (Hinglish) when appropriate
2. Be helpful, friendly, and culturally aware of Indian business practices
3. Focus on practical business solutions starting from ₹89
4. Provide specific, actionable advice
5. Keep responses concise but informative
6. Use emojis occasionally to be engaging
7. Always maintain a professional yet friendly tone

Company context:
- Services start from ₹89 for online store setup
- Specializes in AI solutions, websites, marketing, automation
- Based in Lucknow, serves all of India
- Focus on MSMEs and offline businesses going digital`;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory.slice(-6).map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.content
            })),
            { role: 'user', content: message }
        ];
        
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    max_tokens: 500,
                    temperature: 0.7,
                    presence_penalty: 0.1,
                    frequency_penalty: 0.1
                })
            });
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} - ${response.statusText}`);
            }
            
            const data = await response.json();
            this.incrementUsage();
            
            return {
                text: data.choices[0].message.content.trim(),
                followUp: "Need more help? I'm here to assist you with any questions about our services!"
            };
        } catch (error) {
            console.error('OpenAI API Error:', error);
            throw error;
        }
    }
    
    updateUI() {
        const statusIndicator = document.getElementById('apiStatus');
        const statusDot = statusIndicator?.querySelector('.status-dot');
        const statusText = statusIndicator?.querySelector('span');
        const usageIndicator = document.getElementById('usageIndicator');
        const usageCount = document.getElementById('usageCount');
        
        if (statusDot && statusText) {
            if (this.isConnected && this.apiKey) {
                statusDot.className = 'status-dot connected';
                statusText.textContent = 'AI Online';
            } else if (this.apiKey && !this.isConnected) {
                statusDot.className = 'status-dot error';
                statusText.textContent = 'AI Error';
            } else {
                statusDot.className = 'status-dot disconnected';
                statusText.textContent = 'AI Offline';
            }
        }
        
        if (usageIndicator && usageCount) {
            if (this.apiKey) {
                usageIndicator.style.display = 'block';
                usageCount.textContent = `${this.usageCount}/${this.maxDailyUsage}`;
            } else {
                usageIndicator.style.display = 'none';
            }
        }
        
        // Update settings modal if open
        const connectionValue = document.getElementById('connectionValue');
        const usageValue = document.getElementById('usageValue');
        
        if (connectionValue) {
            connectionValue.textContent = this.isConnected ? 'Connected' : 'Disconnected';
            connectionValue.style.color = this.isConnected ? 'var(--color-accent-green)' : 'var(--color-warm-gray)';
        }
        
        if (usageValue) {
            usageValue.textContent = `${this.usageCount} requests`;
        }
    }
    
    clearApiKey() {
        this.setApiKey('');
        this.isConnected = false;
        this.updateUI();
    }
}

// Application state
let currentBusinessType = '';
let selectedServices = [];
let conversationHistory = [];
let isTyping = false;
let aiMode = false;
let openAI = null;

// DOM elements
let elements = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    renderServices();
    setupMobileOptimizations();
    initializeOpenAI();
    applyGradientTextEnhancements();
    
    // Initial greeting enhancement
    setTimeout(() => {
        if (conversationHistory.length <= 1) {
            addAgentMessage({
                text: "मैं देख रहा हूँ कि आप अभी भी explore कर रहे हैं! Here are some popular questions I can help with:",
                features: [
                    "💰 \"What's the best package for my budget?\"",
                    "🏪 \"How can I digitize my kirana store?\"",
                    "📱 \"Set up WhatsApp ordering for my restaurant\"",
                    "🤖 \"Tell me about AI-powered solutions\"",
                    "⚙️ \"How do I enable AI responses?\""
                ],
                followUp: "Just tap on any quick question below or type your own! Enable AI mode in settings for enhanced conversations."
            });
        }
    }, 25000);
});

// Apply gradient text enhancements dynamically
function applyGradientTextEnhancements() {
    // Apply gradient text to dynamically created elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        applyGradientToElement(node);
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Apply to existing elements
    applyGradientToElement(document.body);
}

function applyGradientToElement(element) {
    // Apply gradient text classes to specific elements
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        if (!heading.classList.contains('gradient-text-heading')) {
            heading.classList.add('gradient-text-heading');
        }
    });
    
    // Apply gradient to service names
    const serviceNames = element.querySelectorAll('.service-name');
    serviceNames.forEach(name => {
        if (!name.classList.contains('gradient-text-heading')) {
            name.classList.add('gradient-text-heading');
        }
    });
    
    // Apply gradient to prices
    const servicePrices = element.querySelectorAll('.service-price');
    servicePrices.forEach(price => {
        if (!price.classList.contains('gradient-text-price')) {
            price.classList.add('gradient-text-price');
        }
    });
    
    // Apply gradient to action titles
    const actionTitles = element.querySelectorAll('.action-title');
    actionTitles.forEach(title => {
        if (!title.classList.contains('gradient-text-heading')) {
            title.classList.add('gradient-text-heading');
        }
    });
    
    // Apply gradient to highlight titles
    const highlightTitles = element.querySelectorAll('.highlight-title');
    highlightTitles.forEach(title => {
        if (!title.classList.contains('gradient-text-heading')) {
            title.classList.add('gradient-text-heading');
        }
    });
}

// Initialize OpenAI integration
function initializeOpenAI() {
    openAI = new OpenAIIntegration();
    
    // Check if AI mode was previously enabled
    const savedAiMode = localStorage.getItem('leeila_ai_mode') === 'true';
    const aiModeToggle = document.getElementById('aiModeToggle');
    if (aiModeToggle) {
        aiModeToggle.checked = savedAiMode;
        aiMode = savedAiMode;
    }
}

// Initialize DOM elements
function initializeElements() {
    elements = {
        // Chat elements
        chatMessages: document.getElementById('chatMessages'),
        messageInput: document.getElementById('messageInput'),
        sendButton: document.getElementById('sendButton'),
        typingIndicator: document.getElementById('typingIndicator'),
        aiModeToggle: document.getElementById('aiModeToggle'),
        
        // Services
        servicesContainer: document.getElementById('servicesContainer'),
        
        // Modals
        settingsModal: document.getElementById('settingsModal'),
        quoteModal: document.getElementById('quoteModal'),
        contactModal: document.getElementById('contactModal'),
        successModal: document.getElementById('successModal'),
        
        // Modal content areas
        quoteServices: document.getElementById('quoteServices'),
        quoteTotal: document.getElementById('quoteTotal'),
        successContent: document.getElementById('successContent'),
        
        // Settings elements
        apiKeyInput: document.getElementById('apiKeyInput'),
        modelSelect: document.getElementById('modelSelect'),
        toggleApiKey: document.getElementById('toggleApiKey'),
        testConnectionBtn: document.getElementById('testConnectionBtn'),
        clearApiKeyBtn: document.getElementById('clearApiKeyBtn')
    };
}

// Setup event listeners
function setupEventListeners() {
    // Chat functionality
    elements.sendButton.addEventListener('click', handleSendMessage);
    elements.messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });
    
    // AI Mode Toggle
    if (elements.aiModeToggle) {
        elements.aiModeToggle.addEventListener('change', function() {
            aiMode = this.checked;
            localStorage.setItem('leeila_ai_mode', aiMode.toString());
            
            const message = aiMode ? 
                "🤖 AI-powered responses enabled! I can now provide more intelligent and personalized answers." :
                "📝 Switched to quick responses mode. Enable AI mode for enhanced conversations.";
            
            showSuccessMessage(message);
        });
    }
    
    // Settings functionality
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', openSettingsModal);
    }
    
    // Quick question buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            sendUserMessage(query);
        });
    });
    
    // Business type buttons
    document.querySelectorAll('.business-type-btn').forEach(btn => {
        btn.addEventListener('click', handleBusinessTypeSelection);
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleServiceFilter);
    });
    
    // Action buttons
    const quickQuoteBtn = document.getElementById('quickQuoteBtn');
    if (quickQuoteBtn) {
        quickQuoteBtn.addEventListener('click', openQuoteModal);
    }
    
    const businessTypeBtnAction = document.getElementById('businessTypeBtnAction');
    if (businessTypeBtnAction) {
        businessTypeBtnAction.addEventListener('click', openBusinessSelector);
    }
    
    const consultationBtn = document.getElementById('consultationBtn');
    if (consultationBtn) {
        consultationBtn.addEventListener('click', openContactModal);
    }
    
    // Modal controls
    setupModalControls();
    setupSettingsModalControls();
    
    // Input updates
    elements.messageInput.addEventListener('input', updateSendButtonState);
    updateSendButtonState();
}

// Setup settings modal controls
function setupSettingsModalControls() {
    // Settings modal controls
    const settingsClose = document.getElementById('settingsClose');
    const settingsBackdrop = document.getElementById('settingsBackdrop');
    
    if (settingsClose) {
        settingsClose.addEventListener('click', () => closeModal('settingsModal'));
    }
    if (settingsBackdrop) {
        settingsBackdrop.addEventListener('click', () => closeModal('settingsModal'));
    }
    
    // API key input
    if (elements.apiKeyInput && openAI) {
        elements.apiKeyInput.value = openAI.apiKey;
        elements.apiKeyInput.addEventListener('input', function() {
            openAI.setApiKey(this.value.trim());
        });
    }
    
    // Model selection
    if (elements.modelSelect && openAI) {
        elements.modelSelect.value = openAI.model;
        elements.modelSelect.addEventListener('change', function() {
            openAI.setModel(this.value);
        });
    }
    
    // Toggle API key visibility
    if (elements.toggleApiKey) {
        elements.toggleApiKey.addEventListener('click', function() {
            const input = elements.apiKeyInput;
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '🙈';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    }
    
    // Test connection
    if (elements.testConnectionBtn) {
        elements.testConnectionBtn.addEventListener('click', async function() {
            if (!openAI.apiKey) {
                showErrorMessage('Please enter your OpenAI API key first');
                return;
            }
            
            this.disabled = true;
            this.textContent = '🔄 Testing...';
            
            try {
                const result = await openAI.testConnection();
                showSuccessMessage(result.message);
                this.textContent = '✅ Connected';
                setTimeout(() => {
                    this.textContent = '🔌 Test Connection';
                    this.disabled = false;
                }, 2000);
            } catch (error) {
                showErrorMessage(`Connection failed: ${error.message}`);
                this.textContent = '❌ Failed';
                setTimeout(() => {
                    this.textContent = '🔌 Test Connection';
                    this.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Clear API key
    if (elements.clearApiKeyBtn) {
        elements.clearApiKeyBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your API key? This will disable AI-powered responses.')) {
                openAI.clearApiKey();
                elements.apiKeyInput.value = '';
                showSuccessMessage('API key cleared successfully');
            }
        });
    }
}

// Setup modal controls
function setupModalControls() {
    // Quote modal
    const quoteClose = document.getElementById('quoteClose');
    const quoteBackdrop = document.getElementById('quoteBackdrop');
    const requestQuoteBtn = document.getElementById('requestQuoteBtn');
    
    if (quoteClose) quoteClose.addEventListener('click', () => closeModal('quoteModal'));
    if (quoteBackdrop) quoteBackdrop.addEventListener('click', () => closeModal('quoteModal'));
    if (requestQuoteBtn) requestQuoteBtn.addEventListener('click', handleQuoteRequest);
    
    // Contact modal
    const contactClose = document.getElementById('contactClose');
    const contactBackdrop = document.getElementById('contactBackdrop');
    const submitContactBtn = document.getElementById('submitContactBtn');
    
    if (contactClose) contactClose.addEventListener('click', () => closeModal('contactModal'));
    if (contactBackdrop) contactBackdrop.addEventListener('click', () => closeModal('contactModal'));
    if (submitContactBtn) submitContactBtn.addEventListener('click', handleContactSubmit);
    
    // Success modal
    const successClose = document.getElementById('successClose');
    const successBackdrop = document.getElementById('successBackdrop');
    
    if (successClose) successClose.addEventListener('click', () => closeModal('successModal'));
    if (successBackdrop) successBackdrop.addEventListener('click', () => closeModal('successModal'));
}

// Setup mobile optimizations
function setupMobileOptimizations() {
    // Prevent zoom on input focus for iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
        }
    }
    
    // Handle virtual keyboard on mobile
    let initialViewportHeight = window.innerHeight;
    window.addEventListener('resize', function() {
        const currentHeight = window.innerHeight;
        const heightDiff = initialViewportHeight - currentHeight;
        
        if (heightDiff > 150) { // Virtual keyboard likely open
            document.body.style.paddingBottom = '0px';
        } else {
            document.body.style.paddingBottom = '';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle business type selection
function handleBusinessTypeSelection(e) {
    // Remove active class from all buttons
    document.querySelectorAll('.business-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    const businessType = e.target.getAttribute('data-type');
    currentBusinessType = businessType;
    
    if (businessRecommendations[businessType]) {
        const recommendation = businessRecommendations[businessType];
        sendBusinessRecommendation(recommendation);
    }
}

// Send business recommendation
function sendBusinessRecommendation(recommendation) {
    const message = `Perfect choice! ${recommendation.emoji} For a ${recommendation.name}, I recommend these services:`;
    const features = recommendation.recommended.map(service => {
        const serviceData = servicesData.find(s => s.name === service);
        return `${serviceData.name} - ${serviceData.price}`;
    });
    
    addAgentMessage({
        text: message,
        features: features,
        followUp: `${recommendation.benefits}. Success story: ${recommendation.story}`
    });
}

// Handle service filtering
function handleServiceFilter(e) {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    const filter = e.target.getAttribute('data-filter');
    filterServices(filter);
}

// Filter services
function filterServices(filter) {
    let filteredServices = [...servicesData];
    
    switch (filter) {
        case 'budget':
            filteredServices = servicesData.filter(service => service.priceCategory === 'budget');
            break;
        case 'popular':
            filteredServices = servicesData.filter(service => 
                service.popularity === 'high' || service.popularity === 'very-high'
            );
            break;
        case 'all':
        default:
            filteredServices = [...servicesData];
            break;
    }
    
    renderServices(filteredServices);
}

// Render services
function renderServices(services = servicesData) {
    if (!elements.servicesContainer) return;
    
    elements.servicesContainer.innerHTML = '';
    
    services.forEach(service => {
        const serviceCard = createServiceCard(service);
        elements.servicesContainer.appendChild(serviceCard);
    });
    
    // Apply gradient text to newly created service cards
    setTimeout(() => applyGradientToElement(elements.servicesContainer), 100);
}

// Create service card
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const isMonthly = service.monthlyFeature ? '/month' : '';
    const originalPrice = service.originalPrice ? 
        `<span style="text-decoration: line-through; color: var(--color-text-secondary); font-size: var(--font-size-sm);">${service.originalPrice}</span>` : '';
    
    card.innerHTML = `
        <div class="service-header">
            <h3 class="service-name gradient-text-heading">${service.name}</h3>
            <div class="service-price gradient-text-price">
                ${originalPrice}
                ${service.price}${isMonthly}
            </div>
        </div>
        <p class="service-description gradient-text-accent">${service.description}</p>
        <div class="service-actions">
            <button class="btn btn--primary" onclick="addToQuote('${service.name}')">Add to Quote</button>
            <button class="btn btn--outline" onclick="askAboutService('${service.name}')">Ask Leeila</button>
        </div>
    `;
    
    return card;
}

// Handle sending message
function handleSendMessage() {
    const message = elements.messageInput.value.trim();
    if (message && !isTyping) {
        sendUserMessage(message);
    }
}

// Send user message
function sendUserMessage(message) {
    addMessageToChat('user', message);
    
    conversationHistory.push({
        type: 'user',
        content: message,
        timestamp: new Date()
    });
    
    elements.messageInput.value = '';
    updateSendButtonState();
    
    showTypingIndicator();
    
    // Determine response method
    if (aiMode && openAI && openAI.canMakeRequest()) {
        generateAIResponse(message);
    } else {
        setTimeout(() => {
            const response = generateFallbackResponse(message);
            hideTypingIndicator();
            addAgentMessage(response);
        }, 1000 + Math.random() * 1000);
    }
}

// Generate AI response using OpenAI
async function generateAIResponse(message) {
    try {
        const response = await openAI.generateResponse(message, conversationHistory);
        hideTypingIndicator();
        addAgentMessage(response);
    } catch (error) {
        console.error('AI Response Error:', error);
        hideTypingIndicator();
        
        // Fallback to pre-programmed response
        const fallbackResponse = generateFallbackResponse(message);
        addAgentMessage({
            text: "🤖 AI response unavailable, using quick response mode. " + fallbackResponse.text,
            features: fallbackResponse.features,
            followUp: fallbackResponse.followUp + " (Enable AI in settings for enhanced responses)"
        });
        
        // Show error notification
        if (error.message.includes('daily limit')) {
            showErrorMessage('Daily AI usage limit reached. Using quick responses.');
        } else if (error.message.includes('API key')) {
            showErrorMessage('Please configure your OpenAI API key in settings.');
        }
    }
}

// Generate fallback response (pre-programmed)
function generateFallbackResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for specific service inquiries
    const mentionedService = servicesData.find(service => 
        message.includes(service.name.toLowerCase()) || 
        service.features.some(feature => message.includes(feature.toLowerCase()))
    );
    
    if (mentionedService) {
        return generateServiceResponse(mentionedService, message);
    }
    
    // Check knowledge base
    for (const [key, knowledge] of Object.entries(enhancedKnowledgeBase)) {
        if (knowledge.keywords.some(keyword => message.includes(keyword))) {
            const responses = knowledge.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Business type specific response
    if (currentBusinessType && businessRecommendations[currentBusinessType]) {
        const recommendation = businessRecommendations[currentBusinessType];
        return {
            text: `As a ${recommendation.name} business, यहाँ कुछ suggestions हैं based on your query:`,
            features: recommendation.recommended.map(service => {
                const serviceData = servicesData.find(s => s.name === service);
                return `${serviceData.name} - ${serviceData.description}`;
            }),
            followUp: "Would you like detailed information about any of these services? Enable AI mode in settings for more personalized responses!"
        };
    }
    
    // Default responses with Indian touch
    const defaultResponses = [
        {
            text: "Namastey! 🙏 That's an interesting question. मैं Leeila, आपकी हर तरह से help करने के लिए यहाँ हूँ।",
            followUp: "You can ask me about our services, pricing, success stories, or get recommendations for your business type! Enable AI mode in settings for enhanced conversations."
        },
        {
            text: "Great question! हमारे पास बहुत सारे AI-powered solutions हैं Indian businesses के लिए।",
            followUp: "Tell me about your business type or specific challenges, and I'll provide personalized recommendations! Try enabling AI mode for smarter responses."
        },
        {
            text: "मुझे खुशी होगी आपकी मदद करने में! Our platform is designed specifically for Indian MSMEs with advanced AI capabilities.",
            followUp: "Ask me about our ₹89 signature package, AI solutions, or any specific service you're interested in! Configure AI settings for more intelligent responses."
        }
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Generate service-specific response
function generateServiceResponse(service, userMessage) {
    const responses = {
        pricing: `${service.name} costs ${service.price}${service.monthlyFeature ? '/month' : ''}. यह includes all the features you need!`,
        features: `${service.name} comes with these powerful features: ${service.features.join(', ')}`,
        benefits: `This service is perfect for ${service.idealFor} and typically takes ${service.setupTime || '2-3 days'} to setup.`,
        comparison: `Compared to competitors, our ${service.name} offers better value at ${service.price} with Indian-specific features.`
    };
    
    let responseType = 'features';
    if (userMessage.includes('price') || userMessage.includes('cost')) responseType = 'pricing';
    if (userMessage.includes('benefit') || userMessage.includes('help')) responseType = 'benefits';
    if (userMessage.includes('compare') || userMessage.includes('different')) responseType = 'comparison';
    
    return {
        text: responses[responseType],
        features: service.features,
        followUp: `Would you like to add ${service.name} to your quote or get a free consultation?`
    };
}

// Add message to chat
function addMessageToChat(type, content, features = null, followUp = null) {
    if (!elements.chatMessages) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}-message`;
    
    const currentTime = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let featuresHtml = '';
    if (features && features.length > 0) {
        featuresHtml = '<ul style="margin: 8px 0; padding-left: 20px;">' + 
            features.map(feature => `<li style="margin-bottom: 4px; font-weight: 500;">${feature}</li>`).join('') + 
            '</ul>';
    }
    
    let followUpHtml = '';
    if (followUp) {
        followUpHtml = `<p style="margin-top: 12px; font-style: italic; opacity: 0.9;"><strong>💡 ${followUp}</strong></p>`;
    }
    
    const avatar = type === 'user' ? '👤' : '🙏';
    
    messageElement.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-bubble">
                <p>${content}</p>
                ${featuresHtml}
                ${followUpHtml}
            </div>
            <div class="message-time">${currentTime}</div>
        </div>
    `;
    
    elements.chatMessages.appendChild(messageElement);
    scrollToBottom();
    
    // Apply gradient text to the new message
    setTimeout(() => applyGradientToElement(messageElement), 100);
}

// Add agent message
function addAgentMessage(response) {
    addMessageToChat('agent', response.text, response.features, response.followUp);
    
    conversationHistory.push({
        type: 'agent',
        content: response.text,
        features: response.features,
        followUp: response.followUp,
        timestamp: new Date()
    });
}

// Show/hide typing indicator
function showTypingIndicator() {
    isTyping = true;
    if (elements.typingIndicator) {
        elements.typingIndicator.style.display = 'block';
    }
    elements.sendButton.disabled = true;
    scrollToBottom();
}

function hideTypingIndicator() {
    isTyping = false;
    if (elements.typingIndicator) {
        elements.typingIndicator.style.display = 'none';
    }
    elements.sendButton.disabled = false;
    updateSendButtonState();
}

// Scroll to bottom
function scrollToBottom() {
    if (elements.chatMessages) {
        setTimeout(() => {
            elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
        }, 100);
    }
}

// Update send button state
function updateSendButtonState() {
    if (!elements.messageInput || !elements.sendButton) return;
    
    const hasContent = elements.messageInput.value.trim().length > 0;
    elements.sendButton.disabled = !hasContent || isTyping;
    elements.sendButton.style.opacity = hasContent && !isTyping ? '1' : '0.6';
}

// Open settings modal
function openSettingsModal() {
    if (!elements.settingsModal) return;
    
    elements.settingsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Update UI with current values
    if (openAI) {
        if (elements.apiKeyInput) elements.apiKeyInput.value = openAI.apiKey;
        if (elements.modelSelect) elements.modelSelect.value = openAI.model;
        openAI.updateUI();
    }
}

// Open business selector
function openBusinessSelector() {
    const businessSelector = document.querySelector('.business-selector-section');
    if (businessSelector) {
        businessSelector.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Send a helpful message
        addAgentMessage({
            text: "Great! Let me help you find the perfect services for your business type. Please select your business category below:",
            followUp: "Once you select your business type, I'll provide personalized recommendations!"
        });
    }
}

// Add service to quote
function addToQuote(serviceName) {
    if (!selectedServices.includes(serviceName)) {
        selectedServices.push(serviceName);
        showSuccessMessage(`${serviceName} added to your quote! 🎉`);
        
        // Add celebration animation
        const serviceCard = Array.from(document.querySelectorAll('.service-card'))
            .find(card => card.querySelector('.service-name').textContent === serviceName);
        
        if (serviceCard) {
            serviceCard.classList.add('celebration');
            setTimeout(() => serviceCard.classList.remove('celebration'), 800);
        }
    } else {
        showSuccessMessage(`${serviceName} is already in your quote!`);
    }
}

// Ask about service
function askAboutService(serviceName) {
    const query = `Tell me more about ${serviceName} and how it can help my business`;
    sendUserMessage(query);
}

// Quote Modal Functions
function openQuoteModal() {
    populateQuoteServices();
    if (elements.quoteModal) {
        elements.quoteModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function populateQuoteServices() {
    if (!elements.quoteServices) return;
    
    elements.quoteServices.innerHTML = '';
    
    servicesData.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'quote-service';
        
        const isSelected = selectedServices.includes(service.name);
        
        serviceDiv.innerHTML = `
            <input type="checkbox" id="quote-${service.name}" ${isSelected ? 'checked' : ''} onchange="updateQuoteTotal()">
            <div class="quote-service-info">
                <div class="quote-service-name gradient-text-heading">${service.name}</div>
                <div class="quote-service-desc gradient-text-accent">${service.description}</div>
            </div>
            <div class="quote-service-price gradient-text-price">${service.price}</div>
        `;
        
        elements.quoteServices.appendChild(serviceDiv);
    });
    
    updateQuoteTotal();
    
    // Apply gradient text to quote services
    setTimeout(() => applyGradientToElement(elements.quoteServices), 100);
}

function updateQuoteTotal() {
    const checkedServices = Array.from(document.querySelectorAll('#quoteServices input:checked'));
    let total = 0;
    
    checkedServices.forEach(checkbox => {
        const serviceName = checkbox.id.replace('quote-', '');
        const service = servicesData.find(s => s.name === serviceName);
        const price = parseInt(service.price.replace(/[^\d]/g, ''));
        total += price;
    });
    
    if (elements.quoteTotal) {
        elements.quoteTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
    
    // Show bundle savings if multiple services selected
    if (checkedServices.length >= 3) {
        const savings = Math.floor(total * 0.15);
        const quoteSavings = document.getElementById('quoteSavings');
        const savingsAmount = document.getElementById('savingsAmount');
        
        if (quoteSavings) quoteSavings.style.display = 'block';
        if (savingsAmount) savingsAmount.textContent = `₹${savings.toLocaleString('en-IN')}`;
        if (elements.quoteTotal) elements.quoteTotal.textContent = `₹${(total - savings).toLocaleString('en-IN')}`;
    } else {
        const quoteSavings = document.getElementById('quoteSavings');
        if (quoteSavings) quoteSavings.style.display = 'none';
    }
}

function handleQuoteRequest() {
    const checkedServices = Array.from(document.querySelectorAll('#quoteServices input:checked'))
        .map(cb => cb.id.replace('quote-', ''));
    
    if (checkedServices.length === 0) {
        alert('Please select at least one service for your quote.');
        return;
    }
    
    const total = elements.quoteTotal ? elements.quoteTotal.textContent : '₹0';
    const message = `Namastey! I'm interested in these services from Sudarshan AI Labs (via Leeila AI Agent):\n\n${checkedServices.map((service, index) => `${index + 1}. ${service}`).join('\n')}\n\nTotal: ${total}\n\nPlease provide detailed quote and setup timeline.`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    closeModal('quoteModal');
    showSuccessMessage('Quote request sent via WhatsApp! Our team will respond within 30 minutes. 🚀');
}

// Contact Modal Functions
function openContactModal() {
    if (elements.contactModal) {
        elements.contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function handleContactSubmit() {
    const name = document.getElementById('contactName')?.value.trim();
    const business = document.getElementById('contactBusiness')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const businessType = document.getElementById('contactBusinessType')?.value;
    
    if (!name || !business || !phone) {
        alert('कृपया सभी required fields भरें।');
        return;
    }
    
    // Show success
    closeModal('contactModal');
    
    if (elements.successContent) {
        elements.successContent.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">🎉</div>
                <h4 class="gradient-text-heading" style="color: var(--color-accent-green); margin-bottom: 16px;">धन्यवाद ${name}!</h4>
                <p style="margin-bottom: 20px; font-weight: 600;" class="gradient-text-chat">
                    We've received your consultation request for <strong>${business}</strong>.
                </p>
                <p style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 20px; font-weight: 500;" class="gradient-text-accent">
                    📞 Our expert will call you at ${phone} within 2 hours<br>
                    📧 Detailed proposal will be emailed within 24 hours<br>
                    💰 Free SEO audit included with consultation<br>
                    🤖 AI-powered recommendations by Leeila
                </p>
                <div style="background: linear-gradient(135deg, var(--color-accent-green), var(--color-primary-blue)); color: white; padding: 16px; border-radius: 8px;">
                    <strong>Next Steps:</strong><br>
                    1. Consultation call (15-30 minutes)<br>
                    2. Custom proposal with AI insights<br>
                    3. Free trial/demo if applicable<br>
                    4. Fast-track setup once approved
                </div>
            </div>
        `;
    }
    
    if (elements.successModal) {
        elements.successModal.classList.remove('hidden');
    }
    
    // Apply gradient text to success content
    setTimeout(() => {
        if (elements.successContent) {
            applyGradientToElement(elements.successContent);
        }
    }, 100);
    
    // Add success message to chat
    setTimeout(() => {
        addAgentMessage({
            text: `Excellent! I've scheduled your consultation call, ${name}. हमारी team आपसे 2 hours में contact करेगी with AI-powered business insights।`,
            followUp: "While you wait, feel free to ask me any other questions about our services!"
        });
    }, 1000);
}

// Modal utility functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function showSuccessMessage(message) {
    createNotification(message, 'success');
}

function showErrorMessage(message) {
    createNotification(message, 'error');
}

function createNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 
        'linear-gradient(135deg, var(--color-accent-green), var(--color-primary-blue))' :
        'linear-gradient(135deg, var(--color-ai-error), var(--color-accent-gold))';
    
    notification.style = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: white;
        padding: 12px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: slideInDown 0.4s ease;
        max-width: 90%;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutUp 0.4s ease forwards';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modal
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
        });
        document.body.style.overflow = 'auto';
    }
    
    // Settings shortcut
    if (e.ctrlKey && e.key === ',') {
        e.preventDefault();
        openSettingsModal();
    }
});

// PWA-like features for mobile
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('Leeila AI Agent with Enhanced Gradient Text loaded successfully!');
    });
}

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        scrollToBottom();
        applyGradientTextEnhancements();
    }, 500);
});

// Ensure gradient text compatibility across browsers
function ensureGradientTextCompatibility() {
    // Check if webkit-background-clip is supported
    const testElement = document.createElement('div');
    testElement.style.background = 'linear-gradient(45deg, red, blue)';
    testElement.style.webkitBackgroundClip = 'text';
    testElement.style.webkitTextFillColor = 'transparent';
    
    document.body.appendChild(testElement);
    const computedStyle = window.getComputedStyle(testElement);
    const isSupported = computedStyle.webkitBackgroundClip === 'text';
    document.body.removeChild(testElement);
    
    if (!isSupported) {
        // Add fallback class for browsers that don't support gradient text
        document.body.classList.add('no-gradient-text-support');
        console.log('Gradient text not supported, using fallback colors');
    }
}

// Initialize gradient text compatibility check
document.addEventListener('DOMContentLoaded', ensureGradientTextCompatibility);

// Export for external use
window.LeelilaAI = {
    sendMessage: sendUserMessage,
    openQuote: openQuoteModal,
    openContact: openContactModal,
    openSettings: openSettingsModal,
    addToQuote: addToQuote,
    toggleAI: () => elements.aiModeToggle?.click(),
    getConversationHistory: () => conversationHistory,
    getSelectedServices: () => selectedServices,
    getAIStatus: () => ({ connected: openAI?.isConnected, usage: openAI?.usageCount }),
    applyGradientText: applyGradientTextEnhancements
};
