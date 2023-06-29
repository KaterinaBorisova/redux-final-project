import Filter from "./Filter";

const AllCategories = () => {
	return (<div className="categories">
		<div>
			{['All', 'Men', 'Women', 'Kids', 'Sport/swiming',]
				.map((category, id) => <Filter category={category} key={id} />)}
		</div>

	</div>)
}


export default AllCategories;
