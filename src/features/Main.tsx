type MainParam = {
  children?: React.ReactNode;  
}

function Main( {children} : MainParam ) {
    return (

        <main className="max-w-[65%] sm:max-w-[50%] md:max-w-[60%] lg:max-w-[65%] flex-7 my-8 mx-2 rounded-2xl bg-gradient-to-b from-lightermoonstone to-moonstone p-3 overflow-hidden">
            {children}
        </main>

    )
}

export default Main;
