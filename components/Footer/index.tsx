const Footer = () => {
  return (
    
    <footer className="w-full border-t bg-white dark:bg-black dark:border-t-zinc-800">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:flex-row md:py-16">
            <div className="flex w-full lg:w-3/5 ">
              <div className="px-4 md:px-0">
                <h3 className="font-bold text-gray-900">About footer</h3>
                <p className="py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel.
                </p>
              </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;