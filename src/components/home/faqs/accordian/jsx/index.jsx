// IMPORT REACT ICONS
import { FaPlus, FaMinus } from "react-icons/fa"

// IMPORT JSX ATOMS
import ParagraphBaseLeading from "@/atoms/atoms-shiva/paragraphs/base/leading/jsx"
import ParagraphLgBold from "@/atoms/atoms-shiva/paragraphs/lg/bold/jsx"

const Accordian = ({ title, description, isOpen, onToggle }) => {

    return (

        <div className="rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-100 hover:bg-blue-50 duration-300 p-6 cursor-pointer" onClick={ onToggle }>
                <ParagraphLgBold>{ title }</ParagraphLgBold>
                <span className="text-xl text-blue-600">
                    { isOpen ? <FaMinus /> : <FaPlus /> }
                </span>
            </div>
            <div className={`duration-500 ease-in-out ${ isOpen ? 'max-h-screen' : 'max-h-0'}` }>
                <div className="p-6">
                    <ParagraphBaseLeading>{ description }</ParagraphBaseLeading>
                </div>
            </div>
        </div>

    )
    
}
export default Accordian
