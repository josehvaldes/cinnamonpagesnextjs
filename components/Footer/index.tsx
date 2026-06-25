
const Footer = () => {
  return (
    
    <footer className="w-full border-t flex flex-col gap-4 bg-white text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">

            {/* Grid */}
                <div className="gap-4 flex flex-col">
                    <p className="font-bold">Help</p>

                    <ul className="gap-2 flex flex-col">
                        <li><a className="" href="#">Help Center</a></li>
                        <li><a className="" href="#">FAQs</a></li>
                        <li><a className="" href="#">Subscription</a></li>
                        <li><a className="" href="#">Order Status</a></li>
                        <li><a className="" href="#">Returns &amp; Exchanges</a></li>
                        <li><a className="" href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="gap-4 flex flex-col">
                    <p className="font-bold">Resources</p>

                    <ul className="gap-2 flex flex-col">
                        <li><a className="" href="#">Gift Cards</a></li>
                        <li><a className="" href="#">Find a Store</a></li>
                        <li><a className="" href="#">Membership</a></li>
                    </ul>
                </div>

                <div className="gap-4 flex flex-col">
                    <p className="font-bold">Company</p>

                    <ul className="gap-2 flex flex-col">
                        <li><a className="" href="#">Newsroom</a></li>
                        <li><a className="" href="#">New features</a></li>
                        <li><a className="" href="#">Careers</a></li>
                        <li><a className="" href="#">Investors</a></li>
                        <li><a className="" href="#">Purpose</a></li>
                    </ul>
                </div>

                <div className="gap-4 flex flex-col">
                    <p className="font-bold">Stay connected</p>

                    <div className="gap-2 flex flex-row">
                        <a className="relative inline-block" href="#">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                            <span className="hidden">Instagram</span>
                        </a>
                        <a className="relative inline-block" href="#">
                            <svg className="" width="20" height="20" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z" fill="currentColor"></path>
                            </svg>
                            <span className="hidden">X (Twitter)</span>
                        </a>
                        <a className="relative inline-block" href="#">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                            <span className="hidden">YouTube</span>
                        </a>
                    </div>
                </div>
        </div>
    </footer>
    );
}

export default Footer;