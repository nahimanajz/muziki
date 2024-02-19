import GuestLinks from "@/Components/Links/GuestLinks";

export default function Guest({searchSection, contents,...rest  }) {
    return (

        
        <div className="w-full h-screen px-[60px]">
        <div className="h-auto pb-[32px]"><GuestLinks/> </div>
        {searchSection? <div className="h-auto bg-slate-300">{searchSection}</div>:null}
        <div className="min-h-2/5 h-full bg-white justify-center flex flex-wrap gap-[20px] py-[48px]">
            {contents ?? rest.children}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur ad aperiam non. Doloribus, exercitationem! Sapiente, fugiat labore ea similique alias voluptatem at expedita. Atque dicta similique minus blanditiis, quisquam error vel! */}
        </div>
    </div>
    );
}
