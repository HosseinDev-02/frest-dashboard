import Index from "./Pages/Index";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TaskBoard from "./Pages/TaskBoard/TaskBoard";
import Pricing from "./Pages/Pricing/Pricing";
import Users from "./Pages/Users/Users";
import Invoice from "./Pages/Invoice/Invoice";
import InvoiceList from "./Pages/Invoice/InvoiceList";
import InvoicePreview from "./Pages/Invoice/InvoicePreview";
import AddInvoice from "./Pages/Invoice/AddInvoice";
import EditInvoice from "./Pages/Invoice/EditInvoice";
import RulesPermissions from "./Pages/RulesPermissions/RulesPermissions";
import Permissions from "./Pages/RulesPermissions/Permissions";
import Rules from "./Pages/RulesPermissions/Rules";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserProjects from "./Pages/UserProfile/UserProjects";
import UserTeam from "./Pages/UserProfile/UserTeam";
import UserConnections from "./Pages/UserProfile/UserConnections";
import AccountSetting from "./Pages/AccountSetting/AccountSetting";
import Account from "./Pages/AccountSetting/Account";
import Connections from "./Pages/AccountSetting/Connections";
import Plans from "./Pages/AccountSetting/Plans";
import Security from "./Pages/AccountSetting/Security";
import Notifications from "./Pages/AccountSetting/Notifications";
import Calendar from "./Pages/Calendar/Calendar";
import UserProfileSetting from "./Pages/UserProfile/UserProfileSetting";

let routes = [
    {
        path: '/', element: <Index/>, children: [
            { path: '/', element: <Dashboard/> },
            { path: 'calendar', element: <Calendar/> },
            { path: 'task-board', element: <TaskBoard/> },
            { path: 'pricing', element: <Pricing/> },
            { path: 'users', element: <Users/> },
            {
                path: 'invoice', element: <Invoice/>, children: [
                    {path: 'list', element: <InvoiceList/>},
                    {path: 'preview', element: <InvoicePreview/>},
                    {path: 'add', element: <AddInvoice/>},
                    {path: 'edit/:mainInvoiceID', element: <EditInvoice/>},
                ]
            },
            {
                path: 'rules&permissions', element: <RulesPermissions/>, children: [
                    {path: 'permissions', element: <Permissions/>},
                    {path: 'rules', element: <Rules/>}
                ]
            },
            {
                path: 'user', element: <UserProfile/>, children: [
                    {path: 'profile', element: <UserProfileSetting/>},
                    {path: 'projects', element: <UserProjects/>},
                    {path: 'team', element: <UserTeam/>},
                    {path: 'connections', element: <UserConnections/>}
                ]
            },
            {
                path: 'account-setting', element: <AccountSetting/>, children: [
                    {path: 'account', element: <Account/>},
                    {path: 'connections', element: <Connections/>},
                    {path: 'plans', element: <Plans/>},
                    {path: 'security', element: <Security/>},
                    {path: 'notifications', element: <Notifications/>},
                ]
            },
        ]
    }
]

export default routes