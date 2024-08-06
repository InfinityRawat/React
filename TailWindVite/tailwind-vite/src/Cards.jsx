
function Cards({obj,name}){
  return(
  <>
<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/6464537/pexels-photo-6464537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="bike in offroad" width="300" height="415" />
  <div className="pt-6  space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
      name: {obj.userName} age: {obj.age}
      </div>
    </figcaption>
  </div>
  
</figure>
</>
  )
}
export default Cards