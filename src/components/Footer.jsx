export default function Footer() {
  return (
    <div className="py-[2rem]">
        <Subscribe/>
        <Columns/>
        <div className="text-center uppercase tracking-[1rem] font-bold">unraveled</div>
    </div>
  )
}

function Subscribe(){
    return(
        <div className="flex justify-center items-center">
            <div className="pr-[3rem]">get a <span className="text-red-800">10% discount</span> on your first order for a subscription</div>
            <input className="rounded-none border border-black border-r-0 pl-[.5rem] py-[.2rem] flex-[0.75] text-[1rem] focus:outline-0" type="email" placeholder="E-mail"/>
            <button className="bg-red-800 px-[2.5rem] py-[.25rem] text-[#E6E6E6]">subscribe</button>
        </div>
    )
}

function Columns() {
  return (
    <div className="py-[3rem] flex justify-between capitalize *:*:cursor-pointer hover:*:*:text-red-800 first:*:*:font-bold">
        <ul>
            <li>catalog</li>
            <li>clothing</li>
            <li>bags</li>
            <li>accessories</li>
        </ul>
        <ul>
            <li>About</li>
            <li>Main</li>
            <li>News</li>
            <li>Vacancies</li>
        </ul>
        <ul>
            <li>for buyers</li>
            <li>size guide</li>
            <li>payments</li>
            <li>discount</li>
        </ul>
        <ul>
            <li>social</li>
            <li>instagram</li>
            <li>twitter</li>
            <li>pinterest</li>
        </ul>
        <ul>
            <li>help</li>
            <li>contact us</li>
            <li>shopping guide</li>
            <li>return process</li>
        </ul>
    </div>
  )
}

