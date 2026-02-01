
const highlights =[
  {
    icon: '🚀' ,
    title: 'Fast Performance',
    description: 'Experience lightning-fast load times and seamless interactions.'
  },
  {
    icon: '💼' ,
    title: 'Professional Design',
    description: 'Sleek and modern designs that leave a lasting impression.'
  },
  {
    icon: '🔒' ,
    title: 'Secure',
    description: 'Top-notch security features to protect your data and privacy.'
  },
  { icon: '⚙️' ,
    title: 'Customizable',
    description: 'Easily tailor features to fit your unique needs and preferences.'
  },
];


export const About = () => {
  return(
  <section id="About" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* left column  */}
        <div className="space-y-8">
          <div className="animate=fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
          Building the future,
          <span className="font-serif italic font-normal text-white"> one component at a time</span>
        </h2>
        <div className="space-y-4 text-muted-foreground animate=fade-in animation-delay-200">
          <p>
            I'm a passionate developer dedicated to crafting exceptional digital experiences. With a keen eye for detail and a commitment to quality, I specialize in creating responsive, user-friendly applications that not only meet but exceed client expectations.
          </p>
          <p>
            My journey in development has equipped me with a diverse skill set, allowing me to tackle challenges head-on and deliver innovative solutions. Whether working independently or collaborating within a team, I thrive in dynamic environments where creativity and technical expertise intersect.
          </p>
          <p>
            Beyond coding, I am an avid learner, constantly exploring new technologies and methodologies to stay ahead in this ever-evolving field. I believe in the power of technology to transform lives and am dedicated to contributing positively through my work.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 glow=border animate-fade-in animation-delay-300">
          <p className="text-lg font-medium text-foreground italic">
            My mission is to build digital solutions that not only function flawlessly but also inspire and engage users. Let's create something amazing together!
          </p>
        </div>
      </div>
      {/* right column  --highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) =>(
            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in " style={{animationDelay: `${(idx +1) * 100}ms`} }>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
               <span className="w-6 h-6 text-primary text-2xl flex items-center justify-center">{item.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};