import React from 'react'
import Button from '../reuseable/Button';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const [status, setStatus] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _replyto: formData.email,
      _subject: `New message from ${formData.name}`,
      _cc: formData.sendCopy ? formData.email : undefined,
    };

    try {
      const response = await fetch('https://formspree.io/f/mzddbwld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', sendCopy: false });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacts" className="px-12 mb-10 mt-20 max-md:px-6 max-md:mb-20">
      <div className="text-center mb-12 max-md:mb-8">
        <h1 className="text-5xl text-[#f0a6ba] font-bold mb-4 max-md:text-3xl max-md:mb-3">
          Get in Touch
        </h1>

        <p className="text-[#f0a6ba] text-lg max-md:text-base">
          Let's bring an incredible idea to life!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto max-md:gap-8">
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-5 max-md:space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-[#f0a6ba] bg-transparent text-[#f0a6ba] placeholder-[#f0a6ba]/60 focus:outline-none focus:ring-2 focus:ring-[#f0a6ba] focus:border-transparent transition-all max-md:px-4 max-md:py-3 max-md:text-sm"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-[#f0a6ba] bg-transparent text-[#f0a6ba] placeholder-[#f0a6ba]/60 focus:outline-none focus:ring-2 focus:ring-[#f0a6ba] focus:border-transparent transition-all max-md:px-4 max-md:py-3 max-md:text-sm"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows="6"
                className="w-full px-5 py-4 rounded-xl border-2 border-[#f0a6ba] bg-transparent text-[#f0a6ba] placeholder-[#f0a6ba]/60 focus:outline-none focus:ring-2 focus:ring-[#f0a6ba] focus:border-transparent transition-all resize-none max-md:px-4 max-md:py-3 max-md:text-sm max-md:rows-4"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="sendCopy"
                id="sendCopy"
                checked={formData.sendCopy}
                onChange={handleChange}
                className="w-5 h-5 rounded border-2 border-[#f0a6ba] text-[#D91F50] focus:ring-2 focus:ring-[#f0a6ba] cursor-pointer"
              />
              <label htmlFor="sendCopy" className="text-[#f0a6ba] text-base cursor-pointer max-md:text-sm">
                Send me a copy of this message
              </label>
            </div>

            {status && (
              <p className={`text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'} max-md:text-xs`}>
                {status}
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
              >
                <Button
                  title={isSubmitting ? "Sending..." : "Send Message"}
                  textColor="#D91F50"
                  bgColor="#f0a6ba"
                />
              </button>
            </div>
          </form>
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8 max-md:space-y-6">
          <div className="p-8 rounded-2xl border-2 border-[#f0a6ba] hover:shadow-lg transition-all max-md:p-6">
            <h3 className="text-2xl text-[#f0a6ba] font-bold mb-6 max-md:text-xl max-md:mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 max-md:space-y-3">
              <div>
                <p className="text-[#f0a6ba]/70 text-sm mb-1 max-md:text-xs">Phone</p>
                <a 
                  href="tel: +2349025105188"
                  className="text-[#f0a6ba] text-lg hover:underline max-md:text-sm"
                >
                  +234 902 510 5188
                </a>
              </div>

              <div>
                <p className="text-[#f0a6ba]/70 text-sm mb-1 max-md:text-xs">Email</p>
                <a
                  href="mailto:olofinevelyn@gmail.com"
                  className="text-[#f0a6ba] text-xl hover:text-[#D91F50] transition-colors break-all max-md:text-lg"
                >
                  olofinevelyn@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f0a6ba]/10 max-md:p-5">
            <p className="text-[#f0a6ba] text-base leading-relaxed max-md:text-sm">
              Available for projects and full-time opportunities. 
              Let's collaborate to create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
