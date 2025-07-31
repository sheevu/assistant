// Enhanced Sudarshan AI Labs Assistant Application

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
    agriculture: {
        name: "Agriculture/Farming",
        emoji: "🌾",
        recommended: ["AI Chatbot & Assistant Development", "WhatsApp Business Bot Setup", "Social Media Marketing"],
        benefits: "Connect with buyers directly and get better prices for produce",
        story: "Farmer Suresh from Mathura now sells directly to 50+ buyers, earning 30% more profit!"
    },
    startup: {
        name: "Startup",
        emoji: "💡",
        recommended: ["SaaS & AI Tool Development (Lite)", "Full Website Setup", "Social Media Marketing"],
        benefits: "Build MVP quickly and establish strong digital presence",
        story: "EduTech startup from IIT Kanpur launched their AI learning platform in just 2 weeks!"
    }
};

// Enhanced Knowledge Base with Indian cultural elements
const enhancedKnowledgeBase = {
    "greeting": {
        keywords: ["hello", "hi", "namaste", "namastey", "हैलो", "नमस्ते"],
        responses: [
            {
                text: "Namastey 🙏 Welcome to Sudarshan AI Labs! I'm delighted to help you transform your business digitally. हमारा मिशन है भारत के 600+ million लोगों को technology से जोड़ना।",
                followUp: "Which type of business do you run? I can provide personalized recommendations based on your needs!"
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
                text: "हमारे solutions specifically Indian businesses को mind में रखकर बनाए गए हैं! Here's how we transform businesses:",
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
                followUp: "Our success rate is 95%+ for MSMEs! Tell me about your business type for personalized recommendations."
            }
        ]
    },
    "payment_methods": {
        keywords: ["payment", "gateway", "upi", "paytm", "phonepe", "gpay", "card", "transaction"],
        responses: [
            {
                text: "हम सभी popular Indian payment methods support करते हैं! Your customers can pay easily:",
                features: [
                    "📱 All UPI apps (Google Pay, PhonePe, Paytm, BHIM)",
                    "💳 All major debit/credit cards (Visa, Mastercard, RuPay)",
                    "🏦 Net banking from 100+ Indian banks",
                    "💰 Popular wallets (Paytm, Mobikwik, Amazon Pay)",
                    "🔒 Bank-grade security with SSL encryption",
                    "⚡ Instant payment confirmations",
                    "📊 Real-time transaction tracking",
                    "💸 Lowest transaction fees in industry"
                ],
                followUp: "Payments are processed within 24-48 hours directly to your bank account. Any specific payment questions?"
            }
        ]
    },
    "whatsapp_setup": {
        keywords: ["whatsapp", "bot", "automation", "chat", "customer service", "auto reply"],
        responses: [
            {
                text: "Our WhatsApp Business Bot is super popular! 90% of Indian customers prefer WhatsApp communication:",
                features: [
                    "🤖 Auto-reply for common questions (24/7)",
                    "📋 Automatic order taking & confirmation",
                    "💳 Direct payment links in chat",
                    "🗣️ Hindi + English + regional language support",
                    "📊 Customer analytics & insights",
                    "🎯 Broadcast messages for offers",
                    "⏰ Schedule messages for festivals/sales",
                    "👥 Handle unlimited customer conversations"
                ],
                followUp: "Basic setup costs just ₹129, Pro version ₹599. Which features do you need most for your business?"
            }
        ]
    },
    "ai_initiatives": {
        keywords: ["ai", "artificial intelligence", "ai-saathi", "kirana ai", "farmer", "agriculture"],
        responses: [
            {
                text: "हमारे AI initiatives are making real impact across India! We're proud of these programs:",
                features: [
                    "🌾 AI-Saathi: Voice assistant for 50M+ farmers (weather, prices, farming tips)",
                    "🏪 Kirana AI: Digitizing 1M+ local shops with smart inventory",
                    "🎓 AI Skilling Programs: Training 100K+ rural youth",
                    "🚀 Startup AI Tools: 500+ startups using our AI solutions",
                    "📱 Voice recognition in 12 Indian languages",
                    "🤖 Smart chatbots understanding Indian context",
                    "📊 Predictive analytics for Indian markets",
                    "💡 Custom AI solutions for MSMEs"
                ],
                followUp: "Which AI initiative would benefit your business most? I can explain how to get started!"
            }
        ]
    },
    "pricing_plans": {
        keywords: ["pricing", "cost", "price", "plans", "packages", "budget", "expensive", "cheap"],
        responses: [
            {
                text: "हमारी pricing बहुत reasonable है! We believe in affordable technology for all:",
                features: [
                    "💰 ₹89/month: Complete online store + payments + SEO",
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
    },
    "success_stories": {
        keywords: ["success", "case study", "example", "proof", "results", "testimonial"],
        responses: [
            {
                text: "हमारे customers के success stories बहुत inspiring हैं! Here are real examples:",
                features: [
                    "🏪 Ramesh's Kirana (Kanpur): Revenue increased from ₹45K to ₹72K/month",
                    "🍽️ Sharma's Dhaba (Lucknow): 150+ daily online orders, 80% revenue growth",
                    "👔 CA Priya (Delhi): Client base grew from 50 to 200+ in 6 months",
                    "🛍️ Fashion Point (Agra): 120% sales increase during lockdown",
                    "🏭 Gupta Industries (Noida): Saved ₹50K/month with automation",
                    "🌾 Farmer Suresh (Mathura): 30% more profit selling directly to buyers",
                    "💡 EduTech Startup (IIT Kanpur): Launched AI platform in 2 weeks"
                ],
                followUp: "These are just a few examples! Want to know how businesses similar to yours have succeeded?"
            }
        ]
    },
    "getting_started": {
        keywords: ["start", "begin", "setup", "onboard", "process", "how to", "steps"],
        responses: [
            {
                text: "Getting started with Sudarshan AI Labs is बहुत easy! हमारा process very smooth है:",
                features: [
                    "📞 Step 1: Free consultation call (15 minutes)",
                    "📋 Step 2: Choose services based on your business type",
                    "💳 Step 3: Make payment (UPI/Card/Net banking)",
                    "🚀 Step 4: We start setup within 2 hours",
                    "📱 Step 5: Your digital presence goes live",
                    "🎓 Step 6: Free training session for your team",
                    "📊 Step 7: Monthly performance reviews",
                    "🤝 Step 8: Ongoing support & improvements"
                ],
                followUp: "Most businesses are live within 24-48 hours! Ready to start? I can connect you with our team right now!"
            }
        ]
    },
    "competition": {
        keywords: ["different", "unique", "why choose", "competitor", "better", "advantage"],
        responses: [
            {
                text: "What makes Sudarshan AI Labs special है our deep understanding of Indian market:",
                features: [
                    "🇮🇳 100% Indian company understanding local needs",
                    "💰 Most affordable pricing (starting ₹89 vs competitors' ₹2000+)",
                    "🗣️ Full support in Hindi & regional languages",
                    "📱 Mobile-first approach (most Indians use mobile only)",
                    "🤖 AI solutions specifically for Indian businesses",
                    "⚡ Fastest setup time (2 minutes vs 2 weeks)",
                    "🎯 Focus on MSMEs, not just large enterprises",
                    "💡 Innovative solutions like voice-based farming assistant"
                ],
                followUp: "हमारा mission है to democratize technology for every Indian business. What matters most to you in choosing a tech partner?"
            }
        ]
    }
};

// Application state
let currentBusinessType = '';
let selectedServices = [];
let conversationHistory = [];
let isTyping = false;
let filteredServices = [...servicesData];

// DOM elements
let elements = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    renderServices();
    displayWelcomeMessage();
});

// Initialize DOM elements
function initializeElements() {
    elements = {
        businessType: document.getElementById('businessType'),
        servicesContainer: document.getElementById('servicesContainer'),
        chatMessages: document.getElementById('chatMessages'),
        messageInput: document.getElementById('messageInput'),
        sendButton: document.getElementById('sendButton'),
        typingIndicator: document.getElementById('typingIndicator'),
        
        // Modals
        comparisonModal: document.getElementById('comparisonModal'),
        quoteModal: document.getElementById('quoteModal'),
        contactModal: document.getElementById('contactModal'),
        successModal: document.getElementById('successModal'),
        
        // Modal content areas
        comparisonContent: document.getElementById('comparisonContent'),
        quoteServices: document.getElementById('quoteServices'),
        quoteTotal: document.getElementById('quoteTotal'),
        contactServices: document.getElementById('contactServices'),
        successContent: document.getElementById('successContent')
    };
}

// Setup event listeners
function setupEventListeners() {
    // Business type selector
    elements.businessType.addEventListener('change', handleBusinessTypeChange);
    
    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Price filters
    document.querySelectorAll('.price-options input').forEach(checkbox => {
        checkbox.addEventListener('change', handlePriceFilter);
    });
    
    // Chat functionality
    elements.sendButton.addEventListener('click', handleSendMessage);
    elements.messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });
    
    // Quick question buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            sendUserMessage(query);
        });
    });
    
    // Modal controls
    setupModalControls();
    
    // Quote calculator
    document.getElementById('quickQuoteBtn').addEventListener('click', openQuoteModal);
    
    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });
    
    // Input updates
    elements.messageInput.addEventListener('input', updateSendButtonState);
    updateSendButtonState();
}

// Setup modal controls
function setupModalControls() {
    // Comparison modal
    document.getElementById('comparisonClose').addEventListener('click', () => closeModal('comparisonModal'));
    document.getElementById('comparisonBackdrop').addEventListener('click', () => closeModal('comparisonModal'));
    
    // Quote modal
    document.getElementById('quoteClose').addEventListener('click', () => closeModal('quoteModal'));
    document.getElementById('quoteBackdrop').addEventListener('click', () => closeModal('quoteModal'));
    document.getElementById('requestQuoteBtn').addEventListener('click', handleQuoteRequest);
    
    // Contact modal
    document.getElementById('contactClose').addEventListener('click', () => closeModal('contactModal'));
    document.getElementById('contactBackdrop').addEventListener('click', () => closeModal('contactModal'));
    document.getElementById('submitContactBtn').addEventListener('click', handleContactSubmit);
    
    // Success modal
    document.getElementById('successClose').addEventListener('click', () => closeModal('successModal'));
    document.getElementById('successBackdrop').addEventListener('click', () => closeModal('successModal'));
}

// Handle business type change
function handleBusinessTypeChange(e) {
    currentBusinessType = e.target.value;
    if (currentBusinessType) {
        const recommendation = businessRecommendations[currentBusinessType];
        addAgentMessage({
            text: `Perfect! ${recommendation.emoji} For a ${recommendation.name}, I recommend these services:`,
            features: recommendation.recommended.map(service => {
                const serviceData = servicesData.find(s => s.name === service);
                return `${serviceData.name} - ${serviceData.price}`;
            }),
            followUp: `${recommendation.benefits}. Success story: ${recommendation.story}`
        });
        
        // Filter services based on recommendation
        highlightRecommendedServices(recommendation.recommended);
    }
}

// Highlight recommended services
function highlightRecommendedServices(recommended) {
    document.querySelectorAll('.service-card').forEach(card => {
        const serviceName = card.querySelector('.service-name').textContent;
        if (recommended.includes(serviceName)) {
            card.classList.add('recommended');
            card.style.border = '2px solid var(--color-primary)';
            card.style.background = 'linear-gradient(135deg, var(--color-bg-1), var(--color-bg-3))';
        } else {
            card.classList.remove('recommended');
            card.style.border = '';
            card.style.background = '';
        }
    });
}

// Handle category filtering
function handleCategoryFilter(e) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const category = e.target.getAttribute('data-category');
    if (category === 'all') {
        filteredServices = [...servicesData];
    } else {
        filteredServices = servicesData.filter(service => service.category === category);
    }
    
    renderServices();
}

// Handle price filtering
function handlePriceFilter() {
    const selectedPrices = Array.from(document.querySelectorAll('.price-options input:checked'))
        .map(input => input.value);
    
    if (selectedPrices.length === 0) {
        filteredServices = [];
    } else {
        filteredServices = servicesData.filter(service => 
            selectedPrices.includes(service.priceCategory)
        );
    }
    
    renderServices();
}

// Handle view toggle
function handleViewToggle(e) {
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const view = e.target.getAttribute('data-view');
    elements.servicesContainer.className = view === 'list' ? 'services-container list' : 'services-container';
}

// Render services
function renderServices() {
    elements.servicesContainer.innerHTML = '';
    
    filteredServices.forEach(service => {
        const serviceCard = createServiceCard(service);
        elements.servicesContainer.appendChild(serviceCard);
    });
    
    // Populate contact services checkboxes
    populateContactServices();
}

// Create service card
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const featuresHtml = service.features.map(feature => `<li>${feature}</li>`).join('');
    const isMonthly = service.monthlyFeature ? '/month' : '';
    const originalPrice = service.originalPrice ? `<span style="text-decoration: line-through; color: var(--color-text-secondary); font-size: var(--font-size-sm);">${service.originalPrice}</span>` : '';
    
    card.innerHTML = `
        <div class="service-header">
            <h3 class="service-name">${service.name}</h3>
            <div class="service-price">
                ${originalPrice}
                ${service.price}${isMonthly}
            </div>
        </div>
        <div class="service-category">${service.category}</div>
        <p class="service-description">${service.description}</p>
        <ul class="service-features">
            ${featuresHtml}
        </ul>
        <div class="service-ideal">
            <strong>Ideal for:</strong> ${service.idealFor}
        </div>
        <div class="service-actions">
            <button class="btn btn--primary" onclick="addToQuote('${service.name}')">Add to Quote</button>
            <button class="btn btn--outline" onclick="askAboutService('${service.name}')">Ask AI</button>
        </div>
    `;
    
    return card;
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
            setTimeout(() => serviceCard.classList.remove('celebration'), 600);
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

// Display welcome message
function displayWelcomeMessage() {
    // Welcome message is already in HTML
    conversationHistory.push({
        type: 'agent',
        content: 'Welcome message displayed',
        timestamp: new Date()
    });
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
    setTimeout(() => {
        const response = generateAIResponse(message);
        hideTypingIndicator();
        addAgentMessage(response);
    }, 1500 + Math.random() * 1000);
}

// Generate AI response
function generateAIResponse(userMessage) {
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
            followUp: "Would you like detailed information about any of these services?"
        };
    }
    
    // Default responses with Indian touch
    const defaultResponses = [
        {
            text: "Namastey! 🙏 That's an interesting question. मैं आपकी हर तरह से help करने के लिए यहाँ हूँ।",
            followUp: "You can ask me about our services, pricing, success stories, or get recommendations for your business type!"
        },
        {
            text: "Great question! हमारे पास बहुत सारे solutions हैं Indian businesses के लिए।",
            followUp: "Tell me about your business type or specific challenges, and I'll provide personalized recommendations!"
        },
        {
            text: "मुझे खुशी होगी आपकी मदद करने में! Our platform is designed specifically for Indian MSMEs.",
            followUp: "Ask me about our ₹89 signature package, AI solutions, or any specific service you're interested in!"
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
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}-message`;
    
    const currentTime = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let featuresHtml = '';
    if (features && features.length > 0) {
        featuresHtml = '<ul>' + features.map(feature => `<li>${feature}</li>`).join('') + '</ul>';
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
    
    // Handle special actions
    if (response.action) {
        setTimeout(() => handleResponseAction(response.action), 1000);
    }
}

// Handle response actions
function handleResponseAction(action) {
    switch (action) {
        case 'openQuote':
            openQuoteModal();
            break;
        case 'openContact':
            openContactModal();
            break;
        case 'openComparison':
            openComparisonModal();
            break;
    }
}

// Show/hide typing indicator
function showTypingIndicator() {
    isTyping = true;
    elements.typingIndicator.style.display = 'block';
    elements.sendButton.disabled = true;
    scrollToBottom();
}

function hideTypingIndicator() {
    isTyping = false;
    elements.typingIndicator.style.display = 'none';
    elements.sendButton.disabled = false;
    updateSendButtonState();
}

// Scroll to bottom
function scrollToBottom() {
    setTimeout(() => {
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }, 100);
}

// Update send button state
function updateSendButtonState() {
    const hasContent = elements.messageInput.value.trim().length > 0;
    elements.sendButton.disabled = !hasContent || isTyping;
    elements.sendButton.style.opacity = hasContent && !isTyping ? '1' : '0.6';
}

// Quote Modal Functions
function openQuoteModal() {
    populateQuoteServices();
    elements.quoteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function populateQuoteServices() {
    elements.quoteServices.innerHTML = '';
    
    servicesData.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'quote-service';
        
        const basePrice = parseInt(service.price.replace(/[^\d]/g, ''));
        const isSelected = selectedServices.includes(service.name);
        
        serviceDiv.innerHTML = `
            <input type="checkbox" id="quote-${service.name}" ${isSelected ? 'checked' : ''} onchange="updateQuoteTotal()">
            <div class="quote-service-info">
                <div class="quote-service-name">${service.name}</div>
                <div class="quote-service-desc">${service.description}</div>
            </div>
            <div class="quote-service-price">${service.price}</div>
        `;
        
        elements.quoteServices.appendChild(serviceDiv);
    });
    
    updateQuoteTotal();
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
    
    elements.quoteTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    
    // Show bundle savings if multiple services selected
    if (checkedServices.length >= 3) {
        const savings = Math.floor(total * 0.15);
        document.getElementById('quoteSavings').style.display = 'block';
        document.getElementById('savingsAmount').textContent = `₹${savings.toLocaleString('en-IN')}`;
        elements.quoteTotal.textContent = `₹${(total - savings).toLocaleString('en-IN')}`;
    } else {
        document.getElementById('quoteSavings').style.display = 'none';
    }
}

function handleQuoteRequest() {
    const checkedServices = Array.from(document.querySelectorAll('#quoteServices input:checked'))
        .map(cb => cb.id.replace('quote-', ''));
    
    if (checkedServices.length === 0) {
        alert('Please select at least one service for your quote.');
        return;
    }
    
    const total = elements.quoteTotal.textContent;
    const message = `Namastey! I'm interested in these services from Sudarshan AI Labs:\n\n${checkedServices.map((service, index) => `${index + 1}. ${service}`).join('\n')}\n\nTotal: ${total}\n\nPlease provide detailed quote and setup timeline.`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    closeModal('quoteModal');
    showSuccessMessage('Quote request sent via WhatsApp! Our team will respond within 30 minutes. 🚀');
}

// Contact Modal Functions
function openContactModal() {
    populateContactServices();
    elements.contactModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function populateContactServices() {
    elements.contactServices.innerHTML = '';
    
    const categories = [...new Set(servicesData.map(s => s.category))];
    categories.forEach(category => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" value="${category}">
            ${category}
        `;
        elements.contactServices.appendChild(label);
    });
}

function handleContactSubmit() {
    const name = document.getElementById('contactName').value.trim();
    const business = document.getElementById('contactBusiness').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const businessType = document.getElementById('contactBusinessType').value;
    
    if (!name || !business || !phone) {
        alert('कृपया सभी required fields भरें।');
        return;
    }
    
    const selectedCategories = Array.from(document.querySelectorAll('#contactServices input:checked'))
        .map(cb => cb.value);
    
    // Show success
    closeModal('contactModal');
    
    elements.successContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 48px; margin-bottom: 20px;">🎉</div>
            <h4 style="color: var(--color-success); margin-bottom: 16px;">धन्यवाद ${name}!</h4>
            <p style="margin-bottom: 20px;">
                We've received your consultation request for <strong>${business}</strong>.
            </p>
            <p style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 20px;">
                📞 Our expert will call you at ${phone} within 2 hours<br>
                📧 Detailed proposal will be emailed within 24 hours<br>
                💰 Free SEO audit included with consultation
            </p>
            <div style="background: var(--color-bg-3); padding: 16px; border-radius: 8px;">
                <strong>Next Steps:</strong><br>
                1. Consultation call (15-30 minutes)<br>
                2. Custom proposal with pricing<br>
                3. Free trial/demo if applicable<br>
                4. Fast-track setup once approved
            </div>
        </div>
    `;
    
    elements.successModal.classList.remove('hidden');
    
    // Add success message to chat
    setTimeout(() => {
        addAgentMessage({
            text: `Excellent! I've scheduled your consultation call, ${name}. हमारी team आपसे 2 hours में contact करेगी।`,
            followUp: "While you wait, feel free to ask me any other questions about our services!"
        });
    }, 1000);
}

// Modal utility functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function showSuccessMessage(message) {
    // Create temporary success notification
    const notification = document.createElement('div');
    notification.style = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--color-success), var(--color-teal-400));
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modal
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
        });
        document.body.style.overflow = 'auto';
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        elements.messageInput.focus();
    }
});

// Initialize with some engaging interactions
setTimeout(() => {
    if (conversationHistory.length <= 1) {
        addAgentMessage({
            text: "मैं देख रहा हूँ कि आप अभी भी explore कर रहे हैं! Here are some popular questions I can help with:",
            features: [
                "💰 \"What's the best package for my budget?\"",
                "🏪 \"How can I digitize my kirana store?\"",
                "📱 \"Set up WhatsApp ordering for my restaurant\"",
                "🤖 \"Tell me about AI solutions for farmers\""
            ],
            followUp: "Just ask me anything or use the quick buttons below! I'm here to help 24/7."
        });
    }
}, 45000);

// Export for external use
window.SudarshanAI = {
    sendMessage: sendUserMessage,
    openQuote: openQuoteModal,
    openContact: openContactModal,
    addToQuote: addToQuote,
    getConversationHistory: () => conversationHistory,
    getSelectedServices: () => selectedServices
};