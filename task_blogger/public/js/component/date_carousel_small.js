frappe.provide('frappe.ui');

frappe.ui.DateCarousel = class DateCarousel {
    constructor() {
        this.options = options || {};
        this.onDateChange = this.options.onDateChange || function() {}; // Add callback
        this.wrapper = null;
        this.root = null;
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
            const [currentIndex, setCurrentIndex] = React.useState(15);
            const [isExpanded, setIsExpanded] = React.useState(false);
            const scrollContainerRef = React.useRef(null);
            const containerRef = React.useRef(null);
            const audioContextRef = React.useRef(null);
            
            React.useEffect(() => {
                return () => {
                    if (audioContextRef.current) {
                        audioContextRef.current.close();
                    }
                };
            }, []);
            
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
                try {
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
                } catch (error) {
                    console.log('Audio playback failed:', error);
                }
            };
            
            React.useEffect(() => {
                const container = containerRef.current;
                
                const handleWheel = (e) => {
                    if (!isExpanded) return; // Only scroll when expanded
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
                
                if (container) {
                    container.addEventListener('wheel', handleWheel, { passive: false });
                }
                
                return () => {
                    if (container) {
                        container.removeEventListener('wheel', handleWheel);
                    }
                };
            }, [currentIndex, dates.length, isExpanded]);
            
            React.useEffect(() => {
                if (scrollContainerRef.current) {
                    const offset = currentIndex * 60;
                    scrollContainerRef.current.style.transform = `translateX(-${offset}px)`;
                }
            }, [currentIndex]);
            
            return React.createElement('div', {
                className: 'date-carousel-wrapper',
                onMouseEnter: () => {
                    console.log('Mouse entered!'); // Debug
                    setIsExpanded(true);
                },
                onMouseLeave: () => {
                    console.log('Mouse left!'); // Debug
                    setIsExpanded(false);
                },
                style: {
                    position: 'fixed',
                    top: '15px',
                    right: '15px',
                    zIndex: 1000
                }
            },
                React.createElement('div', {
                    ref: containerRef,
                    className: 'carousel-container',
                    style: {
                        overflow: 'hidden',
                        width: isExpanded ? '280px' : '70px',
                        height: 'auto',
                        background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
                        borderRadius: '12px',
                        padding: '10px',
                        boxShadow: isExpanded 
                            ? '0 10px 25px -5px rgba(0, 0, 0, 0.25)' 
                            : '0 4px 12px -2px rgba(0, 0, 0, 0.15)',
                        cursor: isExpanded ? 'grab' : 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isExpanded ? 'scale(1)' : 'scale(0.98)'
                    }
                },
                    React.createElement('div', { 
                        style: { 
                            position: 'relative'
                        } 
                    },
                        React.createElement('div', {
                            ref: scrollContainerRef,
                            style: {
                                display: 'flex',
                                gap: '8px',
                                transition: 'all 0.4s ease-out',
                                marginLeft: isExpanded ? '110px' : '0px'
                            }
                        },
                            dates.map((item, index) => {
                                const isCenter = index === currentIndex;
                                const distance = Math.abs(index - currentIndex);
                                
                                // When collapsed, only show center card
                                if (!isExpanded && !isCenter) {
                                    return null;
                                }
                                
                                const opacity = isExpanded 
                                    ? Math.max(0.3, 1 - distance * 0.2) 
                                    : 1;
                                const scale = isCenter ? 1 : Math.max(0.85, 1 - distance * 0.08);
                                
                                return React.createElement('div', {
                                    key: index,
                                    onClick: () => {
                                        if (isExpanded) {
                                            setCurrentIndex(index);
                                            playTickSound();
                                        }
                                    },
                                    style: {
                                        flexShrink: 0,
                                        width: '52px',
                                        height: '70px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        background: isCenter 
                                            ? 'linear-gradient(to bottom right, #fb923c, #f97316)' 
                                            : 'white',
                                        color: isCenter ? 'white' : '#374151',
                                        boxShadow: isCenter 
                                            ? '0 6px 10px -2px rgba(0, 0, 0, 0.1)' 
                                            : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                                        opacity: opacity,
                                        transform: `scale(${scale}) translateY(${isCenter ? '-3px' : '0px'})`,
                                        cursor: isExpanded ? 'pointer' : 'default'
                                    }
                                },
                                    React.createElement('div', {
                                        style: {
                                            fontSize: '10px',
                                            fontWeight: '500',
                                            color: isCenter ? 'rgba(255,255,255,0.9)' : '#9ca3af'
                                        }
                                    }, item.day),
                                    React.createElement('div', {
                                        style: {
                                            fontSize: '22px',
                                            fontWeight: 'bold',
                                            marginTop: '2px',
                                            color: isCenter ? 'white' : '#111827'
                                        }
                                    }, item.date)
                                );
                            }).filter(Boolean) // Remove nulls
                        )
                    ),
                    React.createElement('div', {
                        style: {
                            marginTop: '8px',
                            textAlign: 'center',
                            fontSize: '10px',
                            color: '#9ca3af',
                            opacity: isExpanded ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                        }
                    }, isExpanded ? 'Scroll to navigate' : '')
                )
            );
        };
    
        const container = document.getElementById('date-carousel-root');
        if (container) {
            this.root = ReactDOM.createRoot(container);
            this.root.render(React.createElement(DateCarouselComponent));
        }
    }

    //     renderComponent() {
    //     const DateCarouselComponent = () => {
    //         const [currentIndex, setCurrentIndex] = React.useState(15);
    //         const [isExpanded, setIsExpanded] = React.useState(false); // Add hover state
    //         const scrollContainerRef = React.useRef(null);
    //         const containerRef = React.useRef(null);
    //         const audioContextRef = React.useRef(null);
            
    //         React.useEffect(() => {
    //             return () => {
    //                 if (audioContextRef.current) {
    //                     audioContextRef.current.close();
    //                 }
    //             };
    //         }, []);
            
    //         const generateDates = () => {
    //             const dates = [];
    //             const today = new Date();
                
    //             for (let i = -15; i <= 15; i++) {
    //                 const date = new Date(today);
    //                 date.setDate(today.getDate() + i);
    //                 dates.push({
    //                     day: date.toLocaleDateString('en-US', { weekday: 'short' }),
    //                     date: date.getDate(),
    //                     fullDate: date
    //                 });
    //             }
    //             return dates;
    //         };
            
    //         const dates = generateDates();
            
    //         const playTickSound = () => {
    //             try {
    //                 if (!audioContextRef.current) {
    //                     audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    //                 }
                    
    //                 const ctx = audioContextRef.current;
    //                 const oscillator = ctx.createOscillator();
    //                 const gainNode = ctx.createGain();
                    
    //                 oscillator.connect(gainNode);
    //                 gainNode.connect(ctx.destination);
                    
    //                 oscillator.frequency.value = 800;
    //                 oscillator.type = 'sine';
                    
    //                 gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    //                 gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    
    //                 oscillator.start(ctx.currentTime);
    //                 oscillator.stop(ctx.currentTime + 0.05);
    //             } catch (error) {
    //                 console.log('Audio playback failed:', error);
    //             }
    //         };
            
    //         React.useEffect(() => {
    //             const container = containerRef.current;
                
    //             const handleWheel = (e) => {
    //                 e.preventDefault();
    //                 const delta = e.deltaY || e.deltaX;
                    
    //                 if (Math.abs(delta) > 10) {
    //                     if (delta > 0 && currentIndex < dates.length - 1) {
    //                         setCurrentIndex(prev => prev + 1);
    //                         playTickSound();
    //                     } else if (delta < 0 && currentIndex > 0) {
    //                         setCurrentIndex(prev => prev - 1);
    //                         playTickSound();
    //                     }
    //                 }
    //             };
                
    //             if (container) {
    //                 container.addEventListener('wheel', handleWheel, { passive: false });
    //             }
                
    //             return () => {
    //                 if (container) {
    //                     container.removeEventListener('wheel', handleWheel);
    //                 }
    //             };
    //         }, [currentIndex, dates.length]);
            
    //         React.useEffect(() => {
    //             if (scrollContainerRef.current) {
    //                 const offset = currentIndex * 60;
    //                 scrollContainerRef.current.style.transform = `translateX(-${offset}px)`;
    //             }
    //         }, [currentIndex]);
            
    //         return React.createElement('div', {
    //             className: 'date-carousel-wrapper',
    //             onMouseEnter: () => setIsExpanded(true),  // Expand on hover
    //             onMouseLeave: () => setIsExpanded(false), // Collapse on leave
    //             style: {
    //                 position: 'fixed',
    //                 top: '15px',
    //                 right: '15px',
    //                 zIndex: 1000,
    //                 transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' // Smooth transition
    //             }
    //         },
    //             React.createElement('div', {
    //                 ref: containerRef,
    //                 className: 'carousel-container',
    //                 style: {
    //                     overflow: 'hidden',
    //                     width: isExpanded ? '280px' : '70px', // Collapse to single card width
    //                     height: isExpanded ? 'auto' : '85px', // Collapse height
    //                     background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
    //                     borderRadius: '12px',
    //                     padding: isExpanded ? '10px' : '8px',
    //                     boxShadow: isExpanded 
    //                         ? '0 10px 25px -5px rgba(0, 0, 0, 0.15)' 
    //                         : '0 4px 12px -2px rgba(0, 0, 0, 0.1)',
    //                     cursor: isExpanded ? 'grab' : 'pointer',
    //                     transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    //                     transform: isExpanded ? 'scale(1)' : 'scale(0.95)'
    //                 }
    //             },
    //                 React.createElement('div', { 
    //                     style: { 
    //                         position: 'relative',
    //                         opacity: isExpanded ? 1 : 0.9,
    //                         transition: 'opacity 0.3s ease'
    //                     } 
    //                 },
    //                     React.createElement('div', {
    //                         ref: scrollContainerRef,
    //                         style: {
    //                             display: 'flex',
    //                             gap: '8px',
    //                             transition: 'transform 0.3s ease-out',
    //                             marginLeft: isExpanded ? '110px' : '0px',
    //                             pointerEvents: isExpanded ? 'auto' : 'none'
    //                         }
    //                     },
    //                         dates.map((item, index) => {
    //                             const isCenter = index === currentIndex;
    //                             const distance = Math.abs(index - currentIndex);
    //                             const opacity = isExpanded 
    //                                 ? Math.max(0.3, 1 - distance * 0.2) 
    //                                 : (isCenter ? 1 : 0); // Only show center when collapsed
    //                             const scale = isCenter ? 1 : Math.max(0.85, 1 - distance * 0.08);
                                
    //                             return React.createElement('div', {
    //                                 key: index,
    //                                 onClick: () => {
    //                                     if (isExpanded) {
    //                                         setCurrentIndex(index);
    //                                         playTickSound();
    //                                     }
    //                                 },
    //                                 style: {
    //                                     flexShrink: 0,
    //                                     width: '52px',
    //                                     height: '70px',
    //                                     borderRadius: '10px',
    //                                     display: isExpanded || isCenter ? 'flex' : 'none', // Hide non-center when collapsed
    //                                     flexDirection: 'column',
    //                                     alignItems: 'center',
    //                                     justifyContent: 'center',
    //                                     transition: 'all 0.3s',
    //                                     background: isCenter ? 'linear-gradient(to bottom right, #fb923c, #f97316)' : 'white',
    //                                     color: isCenter ? 'white' : '#374151',
    //                                     boxShadow: isCenter ? '0 6px 10px -2px rgba(0, 0, 0, 0.1)' : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
    //                                     opacity,
    //                                     transform: `scale(${scale}) translateY(${isCenter ? '-3px' : '0px'})`,
    //                                     cursor: isExpanded ? 'pointer' : 'default'
    //                                 }
    //                             },
    //                                 React.createElement('div', {
    //                                     style: {
    //                                         fontSize: '10px',
    //                                         fontWeight: '500',
    //                                         color: isCenter ? 'rgba(255,255,255,0.9)' : '#9ca3af'
    //                                     }
    //                                 }, item.day),
    //                                 React.createElement('div', {
    //                                     style: {
    //                                         fontSize: '22px',
    //                                         fontWeight: 'bold',
    //                                         marginTop: '2px',
    //                                         color: isCenter ? 'white' : '#111827'
    //                                     }
    //                                 }, item.date)
    //                             );
    //                         })
    //                     )
    //                 ),
    //                 // Show hint only when collapsed
    //                 !isExpanded && React.createElement('div', {
    //                     style: {
    //                         position: 'absolute',
    //                         bottom: '-20px',
    //                         left: '50%',
    //                         transform: 'translateX(-50%)',
    //                         fontSize: '10px',
    //                         color: '#9ca3af',
    //                         whiteSpace: 'nowrap',
    //                         opacity: 0.7,
    //                         animation: 'pulse 2s infinite'
    //                     }
    //                 }, '↑ Hover me'),
                    
    //                 // Show scroll hint only when expanded
    //                 isExpanded && React.createElement('div', {
    //                     style: {
    //                         marginTop: '8px',
    //                         textAlign: 'center',
    //                         fontSize: '10px',
    //                         color: '#9ca3af',
    //                         display: 'flex',
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                         gap: '4px'
    //                     }
    //                 }, 'Scroll to navigate')
    //             )
    //         );
    //     };
        
    //     const container = document.getElementById('date-carousel-root');
    //     if (container) {
    //         this.root = ReactDOM.createRoot(container);
    //         this.root.render(React.createElement(DateCarouselComponent));
    //     }
    // }




    // renderComponent() {
    //     const DateCarouselComponent = () => {
    //         const [currentIndex, setCurrentIndex] = React.useState(15);
    //         const scrollContainerRef = React.useRef(null);
    //         const audioContextRef = React.useRef(null);
            
    //         React.useEffect(() => {
    //             return () => {
    //                 if (audioContextRef.current) {
    //                     audioContextRef.current.close();
    //                 }
    //             };
    //         }, []);
            
    //         const generateDates = () => {
    //             const dates = [];
    //             const today = new Date();
                
    //             for (let i = -15; i <= 15; i++) {
    //                 const date = new Date(today);
    //                 date.setDate(today.getDate() + i);
    //                 dates.push({
    //                     day: date.toLocaleDateString('en-US', { weekday: 'short' }),
    //                     date: date.getDate(),
    //                     fullDate: date
    //                 });
    //             }
    //             return dates;
    //         };
            
    //         const dates = generateDates();
            
    //         const playTickSound = () => {
    //             try {
    //                 if (!audioContextRef.current) {
    //                     audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    //                 }
                    
    //                 const ctx = audioContextRef.current;
    //                 const oscillator = ctx.createOscillator();
    //                 const gainNode = ctx.createGain();
                    
    //                 oscillator.connect(gainNode);
    //                 gainNode.connect(ctx.destination);
                    
    //                 oscillator.frequency.value = 800;
    //                 oscillator.type = 'sine';
                    
    //                 gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    //                 gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    
    //                 oscillator.start(ctx.currentTime);
    //                 oscillator.stop(ctx.currentTime + 0.05);
    //             } catch (error) {
    //                 console.log('Audio playback failed:', error);
    //             }
    //         };
            
    //         const handleWheel = (e) => {
    //             e.preventDefault();
    //             const delta = e.deltaY || e.deltaX;
                
    //             if (Math.abs(delta) > 10) {
    //                 if (delta > 0 && currentIndex < dates.length - 1) {
    //                     setCurrentIndex(prev => prev + 1);
    //                     playTickSound();
    //                 } else if (delta < 0 && currentIndex > 0) {
    //                     setCurrentIndex(prev => prev - 1);
    //                     playTickSound();
    //                 }
    //             }
    //         };
            
    //         React.useEffect(() => {
    //             if (scrollContainerRef.current) {
    //                 const offset = currentIndex * 60; // Smaller gap (50px width + 10px gap)
    //                 scrollContainerRef.current.style.transform = `translateX(-${offset}px)`;
    //             }
    //         }, [currentIndex]);
            
    //         return React.createElement('div', {
    //             className: 'date-carousel-wrapper',
    //             style: {
    //                 position: 'fixed',
    //                 top: '15px',
    //                 right: '15px',
    //                 zIndex: 1000
    //             }
    //         },
    //             React.createElement('div', {
    //                 className: 'carousel-container',
    //                 onWheel: handleWheel,
    //                 style: {
    //                     overflow: 'hidden',
    //                     width: '280px', // Reduced from 450px
    //                     background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
    //                     borderRadius: '12px', // Smaller radius
    //                     padding: '10px', // Reduced padding
    //                     boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)', // Softer shadow
    //                     cursor: 'grab'
    //                 }
    //             },
    //                 React.createElement('div', { style: { position: 'relative' } },
    //                     React.createElement('div', {
    //                         ref: scrollContainerRef,
    //                         style: {
    //                             display: 'flex',
    //                             gap: '8px', // Reduced gap
    //                             transition: 'transform 0.3s ease-out',
    //                             marginLeft: '110px' // Adjusted for centering
    //                         }
    //                     },
    //                         dates.map((item, index) => {
    //                             const isCenter = index === currentIndex;
    //                             const distance = Math.abs(index - currentIndex);
    //                             const opacity = Math.max(0.3, 1 - distance * 0.2);
    //                             const scale = isCenter ? 1 : Math.max(0.85, 1 - distance * 0.08);
                                
    //                             return React.createElement('div', {
    //                                 key: index,
    //                                 onClick: () => {
    //                                     setCurrentIndex(index);
    //                                     playTickSound();
    //                                 },
    //                                 style: {
    //                                     flexShrink: 0,
    //                                     width: '52px', // Reduced from 80px
    //                                     height: '70px', // Reduced from 112px
    //                                     borderRadius: '10px',
    //                                     display: 'flex',
    //                                     flexDirection: 'column',
    //                                     alignItems: 'center',
    //                                     justifyContent: 'center',
    //                                     transition: 'all 0.3s',
    //                                     background: isCenter ? 'linear-gradient(to bottom right, #fb923c, #f97316)' : 'white',
    //                                     color: isCenter ? 'white' : '#374151',
    //                                     boxShadow: isCenter ? '0 6px 10px -2px rgba(0, 0, 0, 0.1)' : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
    //                                     opacity,
    //                                     transform: `scale(${scale}) translateY(${isCenter ? '-3px' : '0px'})`,
    //                                     cursor: 'pointer'
    //                                 }
    //                             },
    //                                 React.createElement('div', {
    //                                     style: {
    //                                         fontSize: '10px', // Reduced from 14px
    //                                         fontWeight: '500',
    //                                         color: isCenter ? 'rgba(255,255,255,0.9)' : '#9ca3af'
    //                                     }
    //                                 }, item.day),
    //                                 React.createElement('div', {
    //                                     style: {
    //                                         fontSize: '22px', // Reduced from 30px
    //                                         fontWeight: 'bold',
    //                                         marginTop: '2px',
    //                                         color: isCenter ? 'white' : '#111827'
    //                                     }
    //                                 }, item.date)
    //                             );
    //                         })
    //                     )
    //                 ),
    //                 React.createElement('div', {
    //                     style: {
    //                         marginTop: '8px',
    //                         textAlign: 'center',
    //                         fontSize: '10px', // Smaller text
    //                         color: '#9ca3af',
    //                         display: 'flex',
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                         gap: '4px'
    //                     }
    //                 }, 'Scroll to navigate')
    //             )
    //         );
    //     };
        
    //     const container = document.getElementById('date-carousel-root');
    //     if (container) {
    //         this.root = ReactDOM.createRoot(container);
    //         this.root.render(React.createElement(DateCarouselComponent));
    //     }
    // }
        
   
    
    remove() {
        if (this.wrapper) {
            this.wrapper.remove();
        }
    }
    destroy() {
        this.remove();
    }
};

// Initialize on page load
// $(document).ready(() => {
//     console.log("inside the document().ready and what the hell is document.ready()");
    
//     window.dateCarouselInstance = new frappe.ui.DateCarousel();
// });





