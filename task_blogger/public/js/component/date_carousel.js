frappe.provide('frappe.ui');

frappe.ui.DateCarousel = class DateCarousel {
    constructor() {
        this.make();
    }
    
    make() {
        // Create container
        this.wrapper = $('<div id="date-carousel-root"></div>').appendTo('body');
        
        // Load React and ReactDOM from CDN if not already loaded
        this.loadDependencies().then(() => {
            this.renderComponent();
        });
    }
    
    async loadDependencies() {
        // Check if React is already loaded
        if (typeof React === 'undefined') {
            await this.loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
            await this.loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
        }
    }
    
    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    renderComponent() {
        const DateCarouselComponent = () => {
            const [currentIndex, setCurrentIndex] = React.useState(15); // Start at today (middle)
            const scrollContainerRef = React.useRef(null);
            const audioContextRef = React.useRef(null);
            
            const generateDates = () => {
                const dates = [];
                const today = new Date();
                
                for (let i = -15; i <= 15; i++) {
                    const date = new Date(today);
                    date.setDate(today.getDate() + i);
                    dates.push({
                        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                        date: date.getDate(),
                        fullDate: date
                    });
                }
                return dates;
            };
            
            const dates = generateDates();
            
            const playTickSound = () => {
                if (!audioContextRef.current) {
                    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
                }
                
                const ctx = audioContextRef.current;
                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);
                
                oscillator.frequency.value = 800;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.05);
            };
            
            const handleWheel = (e) => {
                e.preventDefault();
                const delta = e.deltaY || e.deltaX;
                
                if (Math.abs(delta) > 10) {
                    if (delta > 0 && currentIndex < dates.length - 1) {
                        setCurrentIndex(prev => prev + 1);
                        playTickSound();
                    } else if (delta < 0 && currentIndex > 0) {
                        setCurrentIndex(prev => prev - 1);
                        playTickSound();
                    }
                }
            };
            
            React.useEffect(() => {
                if (scrollContainerRef.current) {
                    const offset = currentIndex * 90;
                    scrollContainerRef.current.style.transform = `translateX(-${offset}px)`;
                }
            }, [currentIndex]);
            
            return React.createElement('div', {
                className: 'date-carousel-wrapper',
                style: {
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 1000
                }
            },
                React.createElement('div', {
                    className: 'carousel-container',
                    onWheel: handleWheel,
                    style: {
                        overflow: 'hidden',
                        width: '450px',
                        background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
                        borderRadius: '16px',
                        padding: '16px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        cursor: 'grab'
                    }
                },
                    React.createElement('div', { style: { position: 'relative' } },
                        React.createElement('div', {
                            ref: scrollContainerRef,
                            style: {
                                display: 'flex',
                                gap: '10px',
                                transition: 'transform 0.3s ease-out',
                                marginLeft: '175px'
                            }
                        },
                            dates.map((item, index) => {
                                const isCenter = index === currentIndex;
                                const distance = Math.abs(index - currentIndex);
                                const opacity = Math.max(0.3, 1 - distance * 0.2);
                                const scale = isCenter ? 1 : Math.max(0.85, 1 - distance * 0.08);
                                
                                return React.createElement('div', {
                                    key: index,
                                    onClick: () => {
                                        setCurrentIndex(index);
                                        playTickSound();
                                    },
                                    style: {
                                        flexShrink: 0,
                                        width: '80px',
                                        height: '112px',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s',
                                        background: isCenter ? 'linear-gradient(to bottom right, #fb923c, #f97316)' : 'white',
                                        color: isCenter ? 'white' : '#374151',
                                        boxShadow: isCenter ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        opacity,
                                        transform: `scale(${scale}) translateY(${isCenter ? '-4px' : '0px'})`,
                                        cursor: 'pointer'
                                    }
                                },
                                    React.createElement('div', {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: isCenter ? 'rgba(255,255,255,0.9)' : '#9ca3af'
                                        }
                                    }, item.day),
                                    React.createElement('div', {
                                        style: {
                                            fontSize: '30px',
                                            fontWeight: 'bold',
                                            marginTop: '4px',
                                            color: isCenter ? 'white' : '#111827'
                                        }
                                    }, item.date)
                                );
                            })
                        )
                    ),
                    React.createElement('div', {
                        style: {
                            marginTop: '12px',
                            textAlign: 'center',
                            fontSize: '12px',
                            color: '#9ca3af',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }
                    }, 'Scroll to navigate')
                )
            );
        };
        
        const root = ReactDOM.createRoot(document.getElementById('date-carousel-root'));
        root.render(React.createElement(DateCarouselComponent));
    }
    
    remove() {
        if (this.wrapper) {
            this.wrapper.remove();
        }
    }
};

// Initialize on page load
$(document).ready(() => {
    window.dateCarousel = new frappe.ui.DateCarousel();
});