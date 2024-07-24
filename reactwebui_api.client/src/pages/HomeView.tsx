/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect,useRef } from 'react';
import { Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../root/css/HomeView.css';
import video1 from './V22.mp4';
import pic11 from './pic11.jpg';
import pic12 from './pic12.jpg';
import pic13 from './pic13.jpg';
import pic14 from './pic14.jpg';
import pic15 from './pic1.jpg';
import pic16 from './pic2.jpg';
import fb from './fb.png';
import ig from './ig.png';
import ld from './ld.png';
import x from './x.png';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic4 from './pic4.jpg';
/*import companyLogo from './OIP.jpg';
import usaFlag from './OIP.jpg';
import indiaFlag from './OIP.jpg';
import phoneIcon from './OIP.jpg';
import emailIcon from './OIP.jpg';*/
import pic21 from './pic21.jpg';
import pic22 from './pic22.jpg';
import pic23 from './pic23.jpg';
import india from './india.png';
import usa from './usa.png';
import video2 from './V1.mp4'; 
import video3 from './V3.mp4';
import video4 from './V4.mp4';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsScrollingUp(false);
        } else {
            setIsScrollingUp(true);
        }

        setLastScrollY(currentScrollY);
        setIsAtTop(currentScrollY === 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${!isScrollingUp ? 'hidden' : ''} ${!isAtTop ? 'scrolled' : ''}`}>
            <div className="navbar-logo">RSV Technologies</div>
            <div className="navbar-menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li className="dropdown">
                    <a href="#">Industry</a>
                    <div className="dropdown-container">
                        <ul className="dropdown-menu">
                            <li>Artificial Intelligence Solutions</li>
                            <li>Enterprise Solutions</li>
                            <li>Machine Learning Solutions</li>
                            <li>Mobile Solutions</li>
                            <li>IIoT and IoT Solutions</li>
                            <li>Managed Services</li>
                            <li>Cloud Integration Solutions</li>
                        </ul>
                        <ul className="dropdown-menu">
                            <li>Web Solutions</li>
                            <li>Saas Development</li>
                            <li>Location-based Services</li>
                            <li>Embedded Solutions</li>
                            <li>Salesforce Development</li>
                            <li>Staff Augmentation Services</li>
                            <li>Ondemand Services</li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Resources</a>
                    <div className="dropdown-container">
                    <ul className="dropdown-menu">
                        <li>Web apps</li>
                        <li>mobile apps</li>
                        <li>web solution</li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Technology</a>
                    <div className="dropdown-container">
                    <ul className="dropdown-menu">
                        <li>Healthcare</li>
                        <li>Management</li>
                        <li>Business</li>
                        <li>Science</li>
                        <li>Transport</li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
    );
};



const HomeView: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const videos = [
        {
            src: video1,
            heading: "AI - ML Solutions",
            description: "Enable peak performance and automation for your systems and operations with our AI solutions.",
            buttonText: "Learn More"
        },
        

        {
            src: video2,
            heading: "Digital Transformation",
            description: "Leverage our decades of experience transforming businesses of all shapes and sizes.",
            buttonText: "Learn More"
        },
        {
            src: video3,
            heading: " Software Consulting",
            description: "Consult with the experts to get an optimal product for your business requirements.",
            buttonText: "Learn More"
        },
       

        {
            src: video4,
            heading: "Enterprise Mobility",
            description: "We build solutions that can be accessed from the device of your choice anywhere and anytime.",
            buttonText: "Learn More"
        }
       

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % videos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [videos.length]);

    return (
        <div className="banner">
            <Navbar />
            <Carousel
                selectedItem={currentIndex}
                autoPlay
                interval={3000}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                stopOnHover={false}
                onChange={(index) => setCurrentIndex(index)}
                
            >
                {videos.map((video, index) => (
                    <div key={index} className="carousel-item">
                        <video src={video.src} autoPlay loop muted playsInline className="carousel-video" />
                        <div className="carousel-content">
                            <h1>{video.heading}</h1>
                            <p>{video.description}</p>
                            <button>{video.buttonText}</button>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className="words-container">
                {['Artificial Intelligence', 'Digital Transformation', 'Software Consulting', 'Enterprise Mobility'].map((word, index) => (
                    <div key={index} className={`word ${currentIndex === index ? 'active' : ''}`}>
                        <span>{word}</span>
                        <div className={`loading-bar ${currentIndex === index ? 'active' : ''}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Section Part 2 Code: 
const Section2: React.FC = () => {
    const images = [
        { src: pic11, heading: 'Machine Learning Services' },
        { src: pic12, heading: 'Natural Language Processing(NLP)' },
        { src: pic13, heading: 'Robotic Process Automation' },
        { src: pic14, heading: 'Computatioal Vision' },
        { src: pic15, heading: 'Conversational AI' },
        { src: pic16, heading: 'Recommendation Engine' }
    ];
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const containers = entry.target.querySelectorAll<HTMLDivElement>('.staircase-image-container');
                        containers.forEach((container, index) => {
                            container.classList.add('animate');
                            container.style.animationDelay = `${(containers.length - index - 1) * 0.2}s`;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="section-2">
            <div className="staircase">
               
                <div className="staircase-level">
                    <div className="staircase-image-container">
                        <div className="staircase-heading">{images[0].heading}</div>
                        <img src={images[0].src} alt="Image 1" className="staircase-image" />
                    </div>
                    
                </div>
                <div className="staircase-level">
                    <div className="staircase-image-container">
                        <div className="staircase-heading">{images[1].heading}</div>
                        <img src={images[1].src} alt="Image 2" className="staircase-image" />
                    </div>
                   
                    <div className="staircase-image-container">
                        <div className="staircase-heading">{images[2].heading}</div>
                        <img src={images[2].src} alt="Image 3" className="staircase-image" />
                    </div>
                    <div className="section-2-content">
                        <h2>Next Gen AI Solution We Offer</h2>
                        <p>Our decades of expertise and experience channeled towards building the perfect AI solution.</p>
                    </div>
                </div>
                <div className="staircase-level">
                    <div className="staircase-image-container">
                        <div className="staircase-heading">{images[3].heading}</div>
                        <img src={images[3].src} alt="Image 4" className="staircase-image" />
                    </div>
                    <div className="staircase-image-container">
                        <div className="staircase-heading">{images[4].heading}</div>
                        <img src={images[4].src} alt="Image 5" className="staircase-image" />
                    </div>
                    <div className="staircase-image-container">
                        <div className="staircase-heading">{images[5].heading}</div>
                        <img src={images[5].src} alt="Image 6" className="staircase-image" />
                    </div>
                </div>
            </div>
          
        </div>
    );
};



/*Section 3 Code Part*/
const Section3: React.FC = () => {
    const images = [
        { src: pic1, heading: 'HealthTrack Pro', description: 'HealthTrack Pro is a comprehensive healthcare management platform designed to streamline patient care, track health metrics, and ensure regulatory compliance. It offers advanced features for managing patient records, scheduling appointments, and generating health reports.' },
        { src: pic21, heading: 'EstateVision 360', description: 'EstateVision 360 provides an all-in-one solution for real estate professionals. It includes tools for managing property listings, client interactions, and market analytics, helping users to enhance their business operations and client relationships.' },
        { src: pic22, heading: 'FinSecure Solutions', description: 'FinSecure Solutions offers robust financial management features to track investments, manage expenses, and ensure data security. It’s ideal for both individuals and businesses seeking to optimize their financial planning and operations.' },
        { src: pic4, heading: 'EduSmart LMS', description: 'EduSmart LMS is an advanced learning management system that supports educational institutions with course management, student tracking, and online learning capabilities. It helps educators deliver engaging content and monitor student progress effectively.' },
        { src: pic23, heading: 'RetailBoost Suite', description: 'RetailBoost Suite is a powerful tool for retail businesses, offering features to manage inventory, track sales, and engage customers. It helps retailers streamline their operations and boost sales through enhanced analytics and customer insights.' },
        { src: pic1, heading: 'TravelEase App', description: 'TravelEase App simplifies travel planning with features for booking, itinerary management, and real-time updates. It’s designed to enhance the travel experience by providing users with all the tools they need in one place.' },
        { src: pic2, heading: 'LegalGuard Pro', description: 'LegalGuard Pro provides comprehensive solutions for law firms, including document management, case tracking, and compliance tools. It helps legal professionals manage their cases and documents efficiently, ensuring adherence to legal standards.' },
        { src: pic21, heading: 'RealEstate Insight', description: 'RealEstate Insight offers data-driven analytics and insights for real estate professionals. It helps users make informed decisions with features like market analysis, property valuation, and client relationship management.' },
        { src: pic22, heading: 'TelecomFusion', description: 'TelecomFusion is designed for managing telecom operations, including network monitoring, billing, and customer service. It provides tools for optimizing telecom services and improving customer satisfaction.' },
        { src: pic23, heading: 'LogiTrack Pro', description: 'LogiTrack Pro is an advanced logistics management tool that helps businesses manage their supply chains, track shipments, and optimize delivery routes. It enhances operational efficiency and reduces transportation costs.' },
        { src: pic11, heading: 'HealthMonitor Plus', description: 'HealthMonitor Plus integrates with wearable devices to track vital signs and health trends. It provides users with real-time health data and insights to support personal wellness and medical management.' },
        { src: pic12, heading: 'BuildMaster', description: 'BuildMaster is a comprehensive construction management software that supports project planning, resource allocation, and progress tracking. It helps construction professionals manage projects efficiently and stay on schedule.' },
        { src: pic13, heading: 'RetailConnect', description: 'RetailConnect is a retail management system that focuses on enhancing customer experiences through personalized promotions and efficient store operations. It helps retailers drive sales and improve customer satisfaction.' },
        { src: pic14, heading: 'FinanceWizard', description: 'FinanceWizard provides robust financial management features for both personal and corporate finance. It includes budgeting, forecasting, and reporting tools to help users manage their finances effectively.' },
        { src: pic15, heading: 'TravelMate Solutions', description: 'TravelMate Solutions offers a complete travel management experience with booking, itinerary management, and travel assistance services. It’s designed to streamline the travel process and provide users with a seamless experience.' }
    ];

    // Generate unique descriptions
    const cards = images.map((image) => ({
        image: image.src,
        header: image.heading,
        description: image.description
    }));

    return (
        <div className="section3">
            <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                showIndicators={false }
                autoPlay
                interval={900}
                centerMode
                centerSlidePercentage={20} // Adjust as needed to fit 5 slides on screen
                className="carousel"
                stopOnHover={false }
                swipeable={true}
                renderItem={(item, options) => {
                    const isSelected = options.isSelected;
                    const cardStyle = isSelected ? { transform: 'scale(1)', transition: 'transform 0.5s ease-in-out' } : { transform: 'scale(0.8)', transition: 'transform 0.5s ease-in-out' };
                    return (
                        <div key={options.key} className="carousel-card" style={{ maxWidth: '300px', margin:'-35px', padding: '10px', ...cardStyle, perspective: '1200px' }}>
                            <img src={item.props.src} alt={item.props.alt} className="card-image" style={{ borderRadius: '10px', width: '100%' }} />
                            <div className="card-content" style={{ textAlign: 'center', padding: '10px' }}>
                                <h3 className="card-header">{item.props.children[0]}</h3>
                                <p className="card-description">{item.props.children[1]}</p>
                            </div>
                        </div>
                    );
                }}
            >
                {cards.map((card, index) => (
                    <div key={index} src={card.image} alt={`Card ${index + 1}`}>
                        <h3>{card.header}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};



/*Section 4*/
const Section4: React.FC = () => {
    const [isMobileView, setIsMobileView] = useState({
        isSmall: window.innerWidth <= 480,
        isMedium: window.innerWidth <= 768,
        isMedium2: window.innerWidth <= 780,
        isMedium3: window.innerWidth <= 805,
        isMedium4: window.innerWidth <= 830,
        isMedium5: window.innerWidth <= 880,
        isMedium6: window.innerWidth <= 950,
        isMedium7: window.innerWidth <= 970,
        isLarge: window.innerWidth <= 1024,
        isXLarge: window.innerWidth <= 1168,
        isFullSize: window.innerWidth > 1168
    });
    const getWidth = () => {
        if (isMobileView.isSmall) {
            return '30.5%';
        } else if (isMobileView.isMedium) {
            return '36%';
        } else if (isMobileView.isMedium2) {
            return '45%';
        } else if (isMobileView.isMedium3) {
            return '55%';
        }
        else if (isMobileView.isMedium4) {
            return '55%';
        }
        else if (isMobileView.isMedium5) {
            return '55%';
        }
        else if (isMobileView.isMedium6) {
            return '66%';
        }
        else if (isMobileView.isMedium7) {
            return '75%';
        }
         else if (isMobileView.isLarge) {
            return '11%';
        } else if (isMobileView.isXLarge) {
            return '75%';
        } else {
            return '100%';
        }
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView({
                isSmall: window.innerWidth <= 480,
                isMedium: window.innerWidth <= 768,
                isMedium2: window.innerWidth <= 780,
                isMedium3: window.innerWidth <= 805,
                isMedium4: window.innerWidth <= 830,
                isMedium5: window.innerWidth <= 880,
                isMedium6: window.innerWidth <= 950,
                isMedium7: window.innerWidth <= 970,
                isLarge: window.innerWidth <= 1024,
                isXLarge: window.innerWidth <= 1168,
                isFullSize: window.innerWidth > 1168
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Inline styles
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobileView.isSmall || isMobileView.isMedium || isMobileView.isLarge || isMobileView.isXLarge ? 'column' : 'row',
        alignItems: isMobileView.isSmall || isMobileView.isMedium || isMobileView.isLarge || isMobileView.isXLarge ? 'center' : 'flex-start',
        backgroundColor: '#f5f5f5',
        width: isMobileView.isFullSize ? '100%' : getWidth(),
        transition: 'all 0.3s ease-in-out',
        margin: isMobileView.isSmall || isMobileView.isMedium || isMobileView.isLarge || isMobileView.isXLarge ? '0 130px 0 0' : 'auto',
        
    };

    const imageStyle: React.CSSProperties = {
        flex: 1,
        width: isMobileView ? '90%' : '50%',
        height: isMobileView.isLarge ? 'auto' : '360px',
        maxHeight: '360px',
        maxWidth:' 800px',
        objectFit: 'cover',
        margin: isMobileView ? '0 0 20px 0' : '0 20px 0 0',
        boxShadow: isMobileView ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    };

    const contentStyle: React.CSSProperties = {
        flex: 1,
        width: isMobileView ? '90%' : '50%',
        padding: '20px',
        margin: isMobileView ? '0 0 30px' : '0 20px',
        color: '#0033a0',
        transition: 'transform 0.3s ease-in-out',
        transform: isMobileView ? 'translateY(5px)' : 'translateY(0)',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: '24px',
        marginBottom: '10px',
        width: '100%',
    };

    const borderStyle: React.CSSProperties = {
        borderBottom: '2px solid',
        borderImage: 'linear-gradient(to right, #00f, #0077ff)',
        borderImageSlice: 1,
        marginBottom: '10px',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        backgroundColor: '#0033a0',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
    };
   

    // 3D Box styles
    const boxContainerStyle: React.CSSProperties = {
        
        width: isMobileView ? '90%' : '72%',
        margin: isMobileView ? '20px auto' : '0 150px 150px',
        padding: '20px',
        backgroundImage: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobileView ? 'center' : 'flex-start',
        flexWrap: 'wrap',
        height: '160px',
        position: 'absolute',
        top: '2330px',
        left: '70px',
        visibility: isMobileView ? 'hidden' : 'visible',
    };

    const boxImageStyle: React.CSSProperties = {
        width: '150px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '10px',
        margin: '5px',
    };

    return (
        <div>
            <div style={boxContainerStyle}>
                <img src="https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI" alt="Image 1" style={boxImageStyle} />
                <img src="https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI" alt="Image 2" style={boxImageStyle} />
                <img src="https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI" alt="Image 3" style={boxImageStyle} />
                <img src="https://cdn.unitycms.io/images/0JAaiuOkaGf9F2uD2jIjnq.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=Tesz3k0S7AI" alt="Image 4" style={boxImageStyle} />
            </div>

            <div style={containerStyle}>
                <img src={pic11} alt="Photo" style={imageStyle} />
                <div style={contentStyle}>
                    <h2 style={headingStyle}>Join Our Crew, Come Build the Future With RSV</h2>
                    <div style={borderStyle} />
                    <p >
                        At RSV Technologies, our greatest assets are our employees. Come join a diverse community of talented individuals who work together to deliver excellence and bring software solutions to life.
                        <br />
                        <br />
                        We provide a workplace that is collaborative, and fosters productivity and teamwork. The leadership provides learning and growth opportunities for every individual to thrive professionally. Come join our talented group of testing experts and grow your career with us!!
                    </p>
                    <a href="/careers" style={buttonStyle}>Explore Careers</a>
                </div>
            </div>
        </div>
    );
};
/*const [isMobileView, setIsMobileView] = useState({
    isSmall: window.innerWidth <= 480,
    isMedium: window.innerWidth <= 768,
    isLarge: window.innerWidth <= 1024,
    isXLarge: window.innerWidth <= 1168
});

useEffect(() => {
    const handleResize = () => {
        setIsMobileView({
            isSmall: window.innerWidth <= 480,
            isMedium: window.innerWidth <= 768,
            isLarge: window.innerWidth <= 1024,
            isXLarge: window.innerWidth <= 1168
        });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
*/
/*Contact us*/

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 868);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/{form-id}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        width: '95%',
        alignContent: 'flex-start',
        margin: '50px auto 0 10px', // Center container
        flexWrap: 'wrap',
    };

    const formContainerStyle: React.CSSProperties = {
        flex: isMobileView ? '1' : '2',
        
        padding: '20px',
        backgroundImage: 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        width: '30%', // Full width on mobile
        maxWidth: '900px', // Max width for larger screens
        background: 'skyblue',
        margin: isMobileView? '0 0 0px ': '30px',
    };

    const infoContainerStyle: React.CSSProperties = {
        flex: isMobileView ? '1' : '1',
        padding: '20px',
        backgroundColor: '#e9ecef',
        borderRadius: '8px',
        width: '100%', // Full width on mobile
        maxWidth: isMobileView? '400px': '400px', // Max width for larger screens
        background: 'white',
        margin: isMobileView? '20px 0 30px':'0 60px 30px',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#0033a0',
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: '16px',
        marginBottom: '20px',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', // Full width on mobile
        
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const textareaStyle: React.CSSProperties = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        height: '100px',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        backgroundColor: '#0033a0',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
    };

    const linkStyle: React.CSSProperties = {
        color: '#0033a0',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            {/* Left Side: Contact Us Form */}
            <div style={formContainerStyle}>
                <h2 style={headingStyle}>Contact Us</h2>
                <p style={paragraphStyle}>
                    RSV Technologies is dedicated to providing high-caliber offshore software product engineering services overseen by a local management team with a proven record of success.
                </p>
                <form onSubmit={handleSubmit} action="https://formspree.io/f/{form-id}" method="POST">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={textareaStyle}
                        required
                    />
                    <button type="submit" style={buttonStyle}>Send</button>
                </form>
            </div>

            {/* Right Side: Additional Contact Information */}
            <div style={infoContainerStyle}>
                <h2 style={headingStyle}>Don't Want To Fill a Form?</h2>
                <p style={paragraphStyle}>Email Us</p>
                <h3 style={headingStyle}>Sales Inquiry</h3>
                <a href="mailto:sales@rsvtechnologies.com" style={linkStyle}>sales@rsvtechnologies.com</a>
                <h3 style={headingStyle}>Career</h3>
                <a href="mailto:hiring@rsvtechnologies.com" style={linkStyle}>hiring@rsvtechnologies.com</a>
                <p>
                    <a href="/careers" style={buttonStyle}>See Current Openings</a>
                </p>
            </div>
        </div>
    );
};



/*Footer*/
const Footer: React.FC = () => {
    const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const footerContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '20px',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
    };

    const headerStyle: React.CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        alignItems: isMobileView ? 'center' : 'flex-start',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        borderBottom: '2px solid #0033a0',
        marginBottom: '20px',
    };

    const columnStyle: React.CSSProperties = {
        width: isMobileView ? '100%' : '43%',
        margin: isMobileView ? '10px 0' : '0 0 0 40px',
        padding : '20px',
        textAlign: isMobileView ? 'left' : 'left',
    };

    const columnHeadingStyle: React.CSSProperties = {
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const listStyle: React.CSSProperties = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width:'170px',
    };

    const listItemStyle: React.CSSProperties = {
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobileView ? 'flex-start' : 'flex-start',
    };

    const footerBottomStyle: React.CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: isMobileView ? 'center' : 'space-between',
        alignItems: isMobileView ? 'flex-start' : 'center',
        padding: '10px 0',
        borderTop: '2px solid #0033a0',
        textAlign: isMobileView ? 'left' : 'left',
    };

    const socialIconsStyle: React.CSSProperties = {
        display: 'flex',
        gap: '10px',
        marginBottom: isMobileView ? '10px' : '0',
    };

    const socialIconStyle: React.CSSProperties = {
        width: '40x',
        height: '40px',
    };
    const MobileAli: React.CSSProperties = {
        display: isMobileView ? 'flex' : 'flex',
        flexDirection: isMobileView ? 'row' : 'row',
        width: isMobileView? '400px':'',
    }

    return (
        <div style={footerContainerStyle}>
            <div style={headerStyle}>
                {/* <div style={{ flex: 1 }}>
                    <h2>Hidden Input</h2>
                    <p>Get in touch with us</p>
                    <form>
                        <input type="text" placeholder="Your Name*" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                        <input type="text" placeholder="Your Phone*" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                        <input type="email" placeholder="Your E-mail*" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                        <textarea placeholder="Your Message*" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}></textarea>
                        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0033a0', color: '#fff', border: 'none', borderRadius: '5px' }}>Send</button>
                    </form>
                    <img src={companyLogo} alt="Company Logo" style={{ marginTop: '20px' }} />
                    <p>Bespoke Software</p>
                    <p>Development Partner</p>
                </div>
                <div style={{ flex: 1 }}>
                    */}{/* Animation or Image of Building */}{/*
                    <img src="./path/to/buildingAnimation.png" alt="Building Animation" style={{ width: '100%' }} />
                </div>*/}
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: isMobileView ? 'column' : 'row',
                justifyContent: isMobileView ? 'center' : 'space-between',
                paddingBottom: '20px',
                backgroundColor: 'black',
            }}>
                <div style={MobileAli}>
                <div style={columnStyle}>
                    <h3 style={columnHeadingStyle}>Locations</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}><img src={usa} alt="USA Flag" style={{ width: '20px', verticalAlign: 'middle' }} /> USA</li>
                        <li style={listItemStyle}>San Jose</li>
                        <li style={listItemStyle}>Denver</li>
                        <li style={listItemStyle}>Seattle</li>
                        <li style={listItemStyle}><img src={india} alt="India Flag" style={{ width: '20px', verticalAlign: 'middle' }} /> India</li>
                        <li style={listItemStyle}>Noida</li>
                        <li style={listItemStyle}>Banglore</li>
                       {/* <li style={listItemStyle}><img src={phoneIcon} alt="Phone Icon" style={{ width: '20px', verticalAlign: 'middle' }} /> +1-408-560-1910</li>
                        <li style={listItemStyle}><img src={emailIcon} alt="Email Icon" style={{ width: '20px', verticalAlign: 'middle' }} /> info@matellio.com</li>
             */}       </ul>
                </div>
                <div style={columnStyle}>
                    <h3 style={columnHeadingStyle}>Services</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Embedded Engineering</li>
                        <li style={listItemStyle}>Staff Augmentation</li>
                        <li style={listItemStyle}>DevOps Consulting</li>
                        <li style={listItemStyle}>Mobile App Development</li>
                        <li style={listItemStyle}>MVP Development</li>
                        <li style={listItemStyle}>SaaS Development</li>
                        <li style={listItemStyle}>IOT & IIOT</li>
                        <li style={listItemStyle}>Software Testing</li>
                        <li style={listItemStyle}>Hire Developers</li>
                        <li style={listItemStyle}>Predictive Analytics</li>
                    </ul>
                    </div>
                </div>
                <div style={MobileAli}>
                <div style={columnStyle}>
                    <h3 style={columnHeadingStyle}>Industries</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Transportation & Logistics</li>
                        <li style={listItemStyle}>Banking & Finance</li>
                        <li style={listItemStyle}>Retail & eCommerce</li>
                        <li style={listItemStyle}>Healthcare</li>
                        <li style={listItemStyle}>Telecommunications</li>
                        <li style={listItemStyle}>Travel & Hospitality</li>
                        <li style={listItemStyle}>Legal</li>
                        <li style={listItemStyle}>Real-Estate</li>
                        <li style={listItemStyle}>Education & eLearning</li>
                        <li style={listItemStyle}>Media & Entertainment</li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h3 style={columnHeadingStyle}>Resources</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>About</li>
                        <li style={listItemStyle}>Blogs</li>
                        <li style={listItemStyle}>Case Studies</li>
                        <li style={listItemStyle}>Portfolios</li>
                        <li style={listItemStyle}>Infographics</li>
                        <li style={listItemStyle}>Careers</li>
                        <li style={listItemStyle}>Refer & Earn</li>
                        <li style={listItemStyle}>Submit RFP</li>
                    </ul>
                    </div>
                </div>
                <div style={columnStyle}>
                    <h3 style={columnHeadingStyle}>Rids</h3>
                    <ul style={listStyle}>
                       {/* <img src={companyLogo} style={{ width: '100px' }} alt="Company Logo" />*/}
                    </ul>
                </div>
            </div>

            <div style={footerBottomStyle}>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start', flexDirection: isMobileView ? 'row' : 'row' }}>
                    <img src={fb} alt="Social Media Icons" style={socialIconStyle} />
                    <img src={ig} alt="Social Media Icons" style={socialIconStyle} />
                    <img src={ld} alt="Social Media Icons" style={socialIconStyle} />
                    <img src={x} alt="Social Media Icons" style={socialIconStyle} />
                </div>
                <div style={{ textAlign: isMobileView ? 'center' : 'left', marginRight: isMobileView ? '0' : '150px' }}>
                    <p>2024 © RSV Inc. All rights reserved.</p>
                    <p>
                        <a href="/privacy" style={{ textDecoration: 'none', color: '#0033a0' }}>Privacy Statement</a> |
                        <a href="/terms" style={{ textDecoration: 'none', color: '#0033a0' }}> Terms & Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div>
            <HomeView />
            <Section2 />
            <Section3 />

            <Section4 />
           
            <ContactUs />
            <Footer/>
        </div>
    );
};

export default App;