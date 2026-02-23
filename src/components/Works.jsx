import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import DeviceMockup from './DeviceMockup'
import Magnetic from './Magnetic'

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Magnetic>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="group cursor-pointer relative"
            >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div
                        style={{ transform: "translateZ(50px)" }}
                        className="mb-10 transform transition-transform duration-700"
                    >
                        <DeviceMockup type={project.type}>
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center p-12"
                                    style={{ backgroundColor: `${project.color}10` }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-w-[60%] max-h-[60%] object-contain"
                                    />
                                </div>
                            )}
                        </DeviceMockup>
                    </div>

                    <div
                        style={{ transform: "translateZ(30px)" }}
                        className="flex justify-between items-start"
                    >
                        <div>
                            <h4 className="text-4xl font-bold tracking-tight mb-2 group-hover:text-accent-primary transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-sm opacity-40 uppercase tracking-[0.2em] font-medium">
                                {project.category}
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-background-dark transition-all duration-500">
                            <span className="text-xl">↗</span>
                        </div>
                    </div>
                </a>
            </motion.div>
        </Magnetic>
    );
};

const Works = () => {
    const projects = [
        {
            title: 'RootOut',
            category: 'AI Weed Cutter • 92% Accuracy',
            video: '/pitch_rootout.mp4',
            type: 'macbook',
            color: '#e4ff00',
            url: 'https://rootout.in'
        },
        {
            title: 'Rowan Decor',
            category: 'Flutter • e-Commerce App',
            image: '/RowanDecor_Logo.jpg',
            type: 'iphone',
            color: '#ffffff',
            url: '#'
        },
        {
            title: 'The Cheelaya',
            category: 'MERN • Business Platform',
            image: '/thecheelaya1.png',
            type: 'macbook',
            color: '#4B91F7',
            url: '#'
        },
        {
            title: 'Borana Weaves',
            category: 'PHP • Luxury E-Commerce',
            image: '/borana-weaves-logo.png',
            type: 'macbook',
            color: '#D4AF37',
            url: 'https://boranaweaves.com'
        },
    ]

    return (
        <section id="works" className="section-padding bg-background-dark perspective-1000">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                <div>
                    <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 text-accent-primary">Selected Works</h2>
                    <h3 className="heading-xl">DIGITAL<br />CRAFT.</h3>
                </div>
                <div className="max-w-md">
                    <p className="text-white/40 text-lg leading-relaxed mb-8">
                        A curated selection of projects where design meets functionality. Focused on high-performance solutions and intuitive user experiences.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Works
