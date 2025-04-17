import { FiPhone } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import Button from "../../shared/components/Button"

const Contact = () => {
  return (
    <div>
        <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Let us know how we can help</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center">
            <FiPhone className="h-5 w-5 mr-2 text-primary" />
            <span>+012 345 6789</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="text-primary h-5 w-5" />
            <span>info@orginyze.com</span>
          </div>
        </div>
        
        <Button 
        >
          <span>SEND MESSAGE</span>
        </Button>
      </section>
    </div>
  )
}

export default Contact