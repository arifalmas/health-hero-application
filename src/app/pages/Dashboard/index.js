import HomeRight from '../../components/HomeRight'
import Navbar from '../../components/Navbar'
import UserInformation from '../../components/UserInformation'

const Dashboard = () => {
    return (
        <div className="app" style={{ backgroundImage: 'url(/images/bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="wrapper">
                <Navbar />
                <main className="container my-6 flex flex-wrap lg:flex-nowrap gap-10 items-start">
                    <UserInformation />
                    <HomeRight />
                </main>
            </div>
        </div>
    )
}

export default Dashboard