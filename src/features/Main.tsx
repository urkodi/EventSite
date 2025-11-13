type MainParam = {
  children?: React.ReactNode;  
}

function Main( {children} : MainParam ) {
    return (
        <main className="max-w-[65%] flex-7 my-8 mx-2 rounded-lg bg-moonstone p-3 overflow-hidden">
            {children}
        </main>
    )
}

export default Main;
