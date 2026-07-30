import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error(t.contact.toastFillRequired);
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t.contact.toastValidEmail);
      return;
    }
    
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Aya",
        subject: formData.subject || t.contact.subjectPlaceholder,
        message: formData.message,
        reply_to: formData.email,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      const response = await emailjs.send(
        'service_8mbnsll',
        'template_3y7ajnj',
        templateParams,
        'ffKWF_uXD-0etVRdO'
      );

      if (response.status === 200) {
        toast.success(t.contact.toastSuccess, {
          duration: 5000,
          style: {
            background: '#10b981',
            color: '#fff',
          },
        });
        
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      let errorMessage = t.contact.toastError;
      
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      }
      
      toast.error(errorMessage, {
        duration: 5000,
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t.contact.emailLabel,
      value: "ayaennoamany@gmail.com",
      link: "mailto:ayaennoamany@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t.contact.phoneLabel,
      value: "+212 66666666",
      link: "tel:+21266666666"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t.contact.locationLabel,
      value: t.contact.locationValue,
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: "GitHub", url: "https://github.com/aya123-nomany" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", url: "https://www.linkedin.com/in/aya-en-nomany-47b49b318/" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: '#10b981',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
      />
      
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">{t.contact.conversationTitle}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t.contact.conversationDesc}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      target={info.link.startsWith('http') ? "_blank" : "_self"}
                      rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">{t.contact.followMe}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-glow">
              <h4 className="font-bold text-foreground mb-2">{t.contact.readyTitle}</h4>
              <p className="text-muted-foreground text-sm mb-4">
                {t.contact.readyDesc}
              </p>
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full"
                onClick={() => toast(t.contact.toastComingSoon)}
              >
                {t.contact.scheduleCall}
              </Button>
            </div>
          </div>

          <div className="animate-fadeInUp">
            <div className="glass-card rounded-2xl p-8 hover-glow">
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t.contact.sendMessageTitle}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.nameLabel}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.contact.namePlaceholder}
                      className="glass-card border-0 focus:ring-2 focus:ring-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.emailFieldLabel}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="glass-card border-0 focus:ring-2 focus:ring-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.subjectLabel}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="glass-card border-0 focus:ring-2 focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows={6}
                    className="glass-card border-0 focus:ring-2 focus:ring-primary resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.sendBtn}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;