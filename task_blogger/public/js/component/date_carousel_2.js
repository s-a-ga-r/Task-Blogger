   
   frappe.provide('frappe.ui');

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
