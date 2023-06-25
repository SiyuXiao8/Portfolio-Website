import { useState } from "react"
import CategoryButton from "./CategoryButton"


const ProjectCategories = ({categories, onFilterProject}) => {
    const [activeCategory, setActiveCategory] = useState('all')
    const changeCategoryHandler = (activeCate) => {
        setActiveCategory(activeCate)
        onFilterProject(activeCate)
    }
  return (
    <div className="portfolio__categories">
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} 
                onChangeCategory={()=>changeCategoryHandler(category)} 
                className={`btn cat__btn ${activeCategory === category ? 'primary' : 'light'}`}/>
            ))
        }
    </div>
  )
}

export default ProjectCategories