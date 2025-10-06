import Input from "../Input/Input";
import { useEffect, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import {
    BiChevronDown,
    BiChevronUp,
    BiCog,
    BiCopy,
    BiDotsVerticalRounded,
    BiEdit,
    BiFile,
    BiMenu,
    BiPieChartAlt,
    BiPrinter,
    BiSolidFileExport,
    BiSolidFilePdf,
    BiTrash,
} from "react-icons/bi";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { utils, writeFile } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
    users,
    countries as userCountries,
    roles,
    plans,
    images,
    invoices,
    statuses,
} from "../../Utils/Users";
import React from "react";
import Content from "../Content/Content";
import { createTheme, IconButton, Menu } from "@mui/material";
import MenuAction from "../MenuAction/MenuAction";
import MyPagination from "../MyPagination/MyPagination";

const theme = createTheme({
    components: {
        MuiDataGrid: {
            styleOverrides: {},
        },
    },
});

export default function MyDataTable({ filteredUsers }) {
    const [rows, setRows] = useState(users);
    const [columns, setColumns] = useState([
        {
            field: "menu",
            headerName: "",
            cellClassName: "mobile-action-column-css !max-w-[50px] !w-full",
            headerClassName: "mobile-action-header-column-css !max-w-[50px] !w-full",
            renderCell: (params) => (
                <>
                    <MenuAction
                        editHandler={editUserHandler(params.row)}
                        deleteHandler={handleDeleteClick(params.id)}
                        {...params}
                    />
                </>
            ),
        },
        {
            field: "user",
            headerName: "کاربر",
            headerClassName: "column-header-css-style column-header-user-css",
            cellClassName: "column-css-style column-user-css",
            renderCell: (params) => (
                <div className="flex items-center gap-4">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={params.row.img}
                        alt={params.row.firstName}
                    />
                    <div className="flex flex-col items-start">
                        <span className="leading-6 text-2sm">
                            {params.row.firstName} {params.row.lastName}
                        </span>
                        <span className="leading-6 text-xs text-muted">
                            {params.row.email}
                        </span>
                    </div>
                </div>
            ),
        },
        {
            field: "role",
            headerName: "نقش",
            headerClassName: "column-header-css-style column-header-role-css",
            cellClassName: "column-css-style column-role-css",
            renderCell: (params) => (
                <div className="flex items-center gap-2">
                    <span
                        className={`flex items-center justify-center w-[30px] h-[30px] rounded-full ${
                            params.row.role === "نویسنده"
                                ? "bg-success/15 text-success"
                                : params.row.role === "ویرایشگر"
                                ? "bg-cyan/15 text-cyan"
                                : "bg-blue/15 text-blue"
                        }`}
                    >
                        {params.row.role === "نویسنده" ? (
                            <BiCog size="16px" />
                        ) : params.row.role === "ویرایشگر" ? (
                            <BiEdit size="16px" />
                        ) : (
                            <BiPieChartAlt size="16px" />
                        )}
                    </span>
                    <span className="font-IranYekan-Medium text-2sm text-caption">
                        {params.row.role}
                    </span>
                </div>
            ),
        },
        {
            field: "project",
            headerName: "طرح",
            headerClassName:
                "column-header-css-style column-header-project-css",
            cellClassName: "column-css-style column-project-css",
        },
        {
            field: "invoice",
            headerName: "صورتحساب",
            headerClassName:
                "column-header-css-style !basis-2/12 column-header-invoice-css",
            cellClassName:
                "column-css-style !basis-2/12 !text-caption column-invoice-css",
        },
        {
            field: "status",
            headerName: "وضعیت",
            headerClassName: "column-header-css-style column-header-status-css",
            cellClassName: "column-css-style column-status-css",
            renderCell: (params) => (
                <span
                    className={`text-xs rounded px-2 ${
                        params.row.status === 0
                            ? "bg-orange/15 text-orange"
                            : params.row.status === 1
                            ? "bg-success/15 text-success"
                            : "bg-secondary/15 text-secondary"
                    }`}
                >
                    {params.row.status === 0
                        ? "در انتظار"
                        : params.row === 1
                        ? "فعال"
                        : "غیرفعال"}
                </span>
            ),
        },
        {
            field: "actions",
            type: "actions",
            headerName: "عمل ها",
            sortable: false,
            headerClassName: "column-header-css-style action-column-header-css",
            cellClassName: "column-css-style action-column-css",
            renderCell: (params) => (
                <div className="flex items-center gap-1">
                    <span
                        onClick={editUserHandler(params.row)}
                        className="text-caption cursor-pointer"
                    >
                        <BiEdit size="18px" />
                    </span>
                    <span
                        onClick={handleDeleteClick(params.id)}
                        className="text-caption cursor-pointer"
                    >
                        <BiTrash size="18px" />
                    </span>
                </div>
            ),
        },
    ]);
    const [rowCounts, setRowCounts] = useState([2, 4, 6, 8]);
    const [showRowCounts, setShowRowCounts] = useState(false);
    const [showExportTypes, setShowExportTypes] = useState(false);
    const [showAddNewUser, setShowAddNewUser] = useState(false);
    const [paginationModal, setPaginationModal] = useState({
        page: 0,
        pageSize: 2,
    });
    const [countries, setCountries] = useState(userCountries);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showUserCountry, setShowUserCountry] = useState(false);

    const [userRoles, setUserRoles] = useState(roles);
    const [selectedRole, setSelectedRole] = useState(null);
    const [showUserRoles, setShowUserRoles] = useState(false);

    const [userPlans, setUserPlans] = useState(plans);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showUserPlans, setShowUserPlans] = useState(false);

    const [userImages, setUserImages] = useState(images);
    const [userInvoices, setUserInvoices] = useState(invoices);

    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userStatuses, setUserStatuses] = useState(statuses);

    const [mainUser, setMainUser] = useState(null);

    const handleDeleteClick = (id) => () => {
        console.log(id);
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const editUserHandler = (user) => () => {
        console.log(user);
        setMainUser(user);
        setShowAddNewUser(true);
        setUserFirstName(user.firstName);
        setUserLastName(user.lastName);
        setUserEmail(user.email);
        setSelectedPlan(user.project);
        setSelectedRole(user.role);
    };

    const exportToExcel = () => {
        const ws = utils.json_to_sheet(rows);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Sheet1");
        writeFile(wb, "data.xlsx");
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text("Data Table", 14, 10);
        doc.autoTable({
            head: [columns.map((col) => col.headerName)],
            body: rows.map((row) => columns.map((col) => row[col.field])),
        });
        doc.save("data.pdf");
    };

    const exportToCSV = () => {
        const ws = utils.json_to_sheet(rows);
        const csv = utils.sheet_to_csv(ws);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    function tableSearchHandler(value) {
        if (value) {
            let filteredRows = users.filter((user) =>
                user.firstName.includes(value)
            );
            if (filteredRows.length) {
                setRows(filteredRows);
            } else {
                setRows(users);
            }
        } else {
            setRows(users);
        }
    }

    const handlePrint = () => {
        const printWindow = window.open("", "_blank");

        const tableHTML = `
      <html dir="rtl" lang="fa">
      <head>
        <title>Print Table</title>
        <style>
        body {
        font-family: "IranYekan Medium";
        width: 100%;
        height: 100%;
        min-height: 100vh;
        }
        table {
        table-layout: fixed;
        width: 100%;
        height: 100%;
        }
        tr {
        font-family: "IranYekan Medium";
        }
        th {
        font-family: "IranYekan Bold", "IRANSansX DemiBold";
        font-size: 18px;
        
        }
        td {
        font-family: "IranYekan Medium", "IRANSansX Medium";
        font-size: 16px;
        text-align: center;
        }
        h2 {
        font-family: "IRANSansX DemiBold";
        font-size: 24px;
        text-align: center;
        }
</style>
      </head>
      <body>
        <h2>لیست کاربران</h2>
        <table>
          <thead>
            <tr>
              ${columns
                  .slice(0, 5)
                  .map((col) => `<th>${col.headerName}</th>`)
                  .join("")}
            </tr>
          </thead>
          <tbody>
            ${rows
                .map(
                    (row) => `
                <tr>
                  ${columns
                      .map((col) => {
                          if (col.field !== "actions") {
                              switch (col.field) {
                                  case "user":
                                      return `<td>${row["firstName"]} ${row["lastName"]}</td>`;
                                  case "status": {
                                      return `<td>${
                                          row[col.field] === 0
                                              ? "در انتظار"
                                              : row[col.field] === 1
                                              ? "فعال"
                                              : "غیرفعال"
                                      }</td>`;
                                  }
                                  default:
                                      return `<td>${row[col.field]}</td>`;
                              }
                          }
                      })
                      .join("")}
                </tr>
              `
                )
                .join("")}
          </tbody>
        </table>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(() => window.close(), 1000);
          };
        </script>
      </body>
      </html>
    `;

        printWindow.document.write(tableHTML);
        printWindow.document.close();
    };

    const addNewUserHandler = () => {
        let randomImageIndex = Math.floor(Math.random() * 9);
        let randomInvoiceIndex = Math.floor(Math.random() * 4);
        let randomStatusIndex = Math.floor(Math.random() * 3);
        let newUser = {
            id: rows.length + 1,
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            role: selectedRole,
            project: selectedPlan,
            invoice: userInvoices[randomInvoiceIndex],
            status: userStatuses[randomStatusIndex],
            img: userImages[randomImageIndex],
        };
        setRows((prevRows) => [...prevRows, newUser]);
    };

    const editMainUser = () => {
        console.log("edit user btn clicked");
        let randomImageIndex = Math.floor(Math.random() * 9);
        let randomInvoiceIndex = Math.floor(Math.random() * 4);
        let randomStatusIndex = Math.floor(Math.random() * 3);
        let updatedUsers = rows.map((row) => {
            if (row.id === mainUser.id) {
                row.firstName = userFirstName;
                row.lastName = userLastName;
                row.email = userEmail;
                row.status = userStatuses[randomStatusIndex];
                row.project = selectedPlan;
                row.role = selectedRole;
                row.img = userImages[randomImageIndex];
                row.invoice = userInvoices[randomInvoiceIndex];
            }
            return row;
        });
        setRows(updatedUsers);
    };

    useEffect(() => {
        if (filteredUsers?.length) {
            setRows(filteredUsers);
        } else {
            setRows(users);
        }
    }, [filteredUsers]);

    return (
        <div className="bg-white">
            <div className="flex flex-col gap-4 md:flex-row items-center justify-between px-[22px] py-4">
                <Input
                    className="!w-auto"
                    selectedItem={paginationModal.pageSize}
                    setShowContent={setShowRowCounts}
                    showContent={showRowCounts}
                    type="selectbox"
                    placeholder={paginationModal.pageSize}
                >
                    <ul className="bg-white flex flex-col rounded-b overflow-hidden">
                        {rowCounts.map((count) => (
                            <li
                                key={count}
                                onClick={() => {
                                    setPaginationModal((prevState) => {
                                        return {
                                            page: prevState.page,
                                            pageSize: count,
                                        };
                                    });
                                    setShowRowCounts(false);
                                }}
                                className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                            >
                                <span className="font-IranYekan-Medium text-2sm text-inherit">
                                    {count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Input>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Input
                        className="!w-auto"
                        inputClassName="!min-w-[200px]"
                        onChange={(event) =>
                            tableSearchHandler(event.target.value)
                        }
                        type="text"
                        placeholder="جستجو..."
                    />
                    <div className="flex items-center gap-4">
                        <Input
                            className="!w-auto !shrink-0"
                            renderButton={
                                <SecondaryButton
                                    onClick={() =>
                                        setShowExportTypes(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className="flex-row-reverse"
                                    icon="BiChevronDown"
                                    iconSize="20px"
                                    title="برون بری"
                                />
                            }
                            selectedItem=""
                            setShowContent={setShowExportTypes}
                            showContent={showExportTypes}
                            type="selectbox"
                            placeholder="برون بری"
                        >
                            <ul className="bg-white flex flex-col rounded-b overflow-hidden py-1">
                                <li>
                                    <button
                                        onClick={handlePrint}
                                        className="flex gap-2 font-IranYekan-Bold text-2sm px-4 py-2 transition-colors duration-300 w-full hover:bg-gray-light"
                                    >
                                        <BiPrinter size="18px" />
                                        <span>چاپ</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={exportToCSV}
                                        className="flex gap-2 font-IranYekan-Bold text-2sm px-4 py-2 transition-colors duration-300 w-full hover:bg-gray-light"
                                    >
                                        <BiFile size="18px" />
                                        <span>CSV</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={exportToExcel}
                                        className="flex gap-2 font-IranYekan-Bold text-2sm px-4 py-2 transition-colors duration-300 w-full hover:bg-gray-light"
                                    >
                                        <BiSolidFileExport size="18px" />
                                        <span>Excel</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={exportToPDF}
                                        className="flex gap-2 font-IranYekan-Bold text-2sm px-4 py-2 transition-colors duration-300 w-full hover:bg-gray-light"
                                    >
                                        <BiSolidFilePdf size="18px" />
                                        <span>PDF</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex gap-2 font-IranYekan-Bold text-2sm px-4 py-2 transition-colors duration-300 w-full hover:bg-gray-light">
                                        <BiCopy size="18px" />
                                        <span>کپی</span>
                                    </button>
                                </li>
                            </ul>
                        </Input>
                        <PrimaryButton
                            titleClassName="hidden md:inline"
                            onClick={() => setShowAddNewUser(true)}
                            className="!px-2"
                            icon="BiPlus"
                            title="افزودن کاربر جدید"
                            iconSize="20px"
                        />
                    </div>
                    {/*  Add New User Wrapper  */}
                    <Content
                    className={'overflow-auto'}
                        clickHandler={() => {
                            setShowAddNewUser(false);
                            if (mainUser) {
                                console.log("clear main user");
                                setMainUser(null);
                                setUserFirstName("");
                                setUserLastName("");
                                setUserEmail("");
                                setSelectedPlan("");
                                setSelectedRole("");
                            }
                        }}
                        title={mainUser ? "ویرایش کاربر" : "افزودن کاربر"}
                        showContent={showAddNewUser}
                        setShowContent={setShowAddNewUser}
                    >
                        {/*  User FirstName Input  */}
                        <Input
                            value={userFirstName}
                            onChange={(event) =>
                                setUserFirstName(event.target.value)
                            }
                            type="text"
                            label="نام"
                            placeholder="جان"
                        />
                        {/*  User LastName Input  */}

                        <Input
                            value={userLastName}
                            onChange={(event) =>
                                setUserLastName(event.target.value)
                            }
                            type="text"
                            label="نام خانوادگی"
                            placeholder="اسنو"
                        />
                        {/*  User Email Input  */}

                        <Input
                            value={userEmail}
                            onChange={(event) =>
                                setUserEmail(event.target.value)
                            }
                            type="text"
                            label="ایمیل"
                            placeholder="example@gmail.com"
                        />
                        {/*  User Phone Input  */}

                        <Input
                            type="text"
                            label="تماس"
                            placeholder="+989123456789"
                        />
                        {/*  User Company Input  */}

                        <Input
                            type="text"
                            label="شرکت"
                            placeholder="توسعه دهنده وب"
                        />
                        {/*  User Country Input  */}

                        <Input
                            label="کشور"
                            selectedItem={selectedCountry}
                            setShowContent={setShowUserCountry}
                            showContent={showUserCountry}
                            type="selectbox"
                            placeholder={
                                selectedCountry
                                    ? selectedCountry
                                    : "انتخاب کشور"
                            }
                        >
                            <ul className="bg-white flex flex-col rounded-b overflow-y-auto h-64">
                                {countries.map((country) => (
                                    <li
                                        key={country.id}
                                        onClick={() => {
                                            setSelectedCountry(country.name);
                                            setShowUserCountry(false);
                                        }}
                                        className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer shrink-0`}
                                    >
                                        <span className="font-IranYekan-Medium text-2sm text-inherit">
                                            {country.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Input>
                        {/*  User Role Input  */}

                        <Input
                            label="نقش"
                            selectedItem={selectedRole}
                            setShowContent={setShowUserRoles}
                            showContent={showUserRoles}
                            type="selectbox"
                            placeholder={
                                selectedRole ? selectedRole : "نقش کاربر"
                            }
                        >
                            <ul className="bg-white flex flex-col rounded-b overflow-y-auto max-h-64">
                                {userRoles.map((role) => (
                                    <li
                                        key={role.id}
                                        onClick={() => {
                                            setSelectedRole(role.name);
                                            setShowUserRoles(false);
                                        }}
                                        className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer shrink-0`}
                                    >
                                        <span className="font-IranYekan-Medium text-2sm text-inherit">
                                            {role.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Input>
                        {/*  User Plan Input  */}

                        <Input
                            label="پلن"
                            selectedItem={selectedPlan}
                            setShowContent={setShowUserPlans}
                            showContent={showUserPlans}
                            type="selectbox"
                            placeholder={
                                selectedPlan ? selectedPlan : "انتخاب پلن"
                            }
                        >
                            <ul className="bg-white flex flex-col rounded-b overflow-y-auto max-h-64">
                                {userPlans.map((plan) => (
                                    <li
                                        key={plan.id}
                                        onClick={() => {
                                            setSelectedPlan(plan.name);
                                            setShowUserPlans(false);
                                        }}
                                        className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer shrink-0`}
                                    >
                                        <span className="font-IranYekan-Medium text-2sm text-inherit">
                                            {plan.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Input>
                        {/*  Event Footer Buttons  */}
                        <div className="flex gap-4">
                            {mainUser ? (
                                <PrimaryButton
                                    onClick={editMainUser}
                                    title="ویرایش"
                                />
                            ) : (
                                <PrimaryButton
                                    onClick={addNewUserHandler}
                                    title="افزودن"
                                />
                            )}
                            <SecondaryButton
                                onClick={() => setShowAddNewUser(false)}
                                title="انصراف"
                            />
                        </div>
                    </Content>
                </div>
            </div>
            <div className="flex flex-col">
                <DataGrid
                    sx={{
                        ".css-wqp0ve": {
                            fontFamily: "IranYekan Bold !important",
                            fontSize: "15px !important",
                            color: "rgb(var(--color-muted)) !important",
                        },
                        ".MuiDataGrid-columnSeparator": {
                            display: "none",
                        },
                        ".MuiDataGrid-columnHeaderTitleContainer": {
                            display: "flex",
                            justifyContent: "space-between",
                        },
                        ".MuiDataGrid-filler": {
                            display: "none",
                        },
                        ".MuiDataGrid-cellEmpty": {
                            display: "none",
                        },
                        ".css-1gak8h1-MuiToolbar-root-MuiTablePagination-toolbar":
                            {
                                justifyContent: "space-between",
                                flexDirection: "column",
                                padding: "16px 24px !important",
                                gap: "16px",
                            },
                        ".css-1wtxofq-MuiTablePagination-spacer": {
                            display: "none",
                        },
                        ".css-11cfq65-MuiTablePagination-displayedRows": {
                            fontFamily: "IranYekan Bold",
                            fontsize: "15px",
                            color: "rgb(var(--color-muted))",
                        },
                        ".MuiDataGrid-row": {
                            height: "auto !important",
                            minHeight: "none !important",
                            maxHeight: "none !important",
                            width: "100% !important",
                        },
                        ".css-1vouojk": {
                            height: "auto !important",
                            minHeight: "none !important",
                            maxHeight: "none !important",
                            width: "100% !important",
                            position: "static !important",
                            overflow: "hidden",
                        },
                        ".css-aymtem-MuiDataGrid-virtualScrollerContent": {
                            flexBasis: "auto !important",
                            width: "auto !important",
                        },
                        ".css-11dqcl8-MuiDataGrid-virtualScrollerRenderZone": {
                            width: "100% !important",
                            position: "static",
                        },
                        ".MuiDataGrid-cell:focus": {
                            outline: "none !important",
                        },
                        ".MuiDataGrid-row:hover": {
                            backgroundColor: "transparent !important",
                        },
                        ".css-1gtv474-MuiDataGrid-columnHeaders": {
                            width: "100% !important",
                        },
                        ".css-16z8vpz": {
                            display: "none !important",
                        },
                        ".css-1vigakz-MuiDataGrid-virtualScroller": {
                            overflow: "visible !important",
                        },
                        ".css-1f63zk": {
                            display: "none !important",
                        },
                        ".css-l45izh": {
                            padding: "16px !important",
                            justifyContent: "space-between !important",
                            flexWrap: "wrap",
                            gap: "20px",
                        },
                        ".css-8t0cmw .MuiDataGrid-columnHeaders": {
                            width: "100% !important",
                        },
                        ".css-1t374vw": {
                            width: "100% !important",
                        },
                        ".css-1xdhyk6": {
                            width: "auto !important",
                        },
                    }}
                    localeText={{
                        MuiTablePagination: {
                            labelDisplayedRows: ({ from, count, to }) =>
                                `نمایش ${from} تا ${to} از ${count} ردیف`,
                        },
                    }}
                    slots={{
                        pagination: MyPagination,
                        columnHeaderSortIcon: (event) => (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "blue",
                                }}
                            >
                                <span
                                    className={`${
                                        event.direction === "asc"
                                            ? "text-dark"
                                            : "text-gray"
                                    }`}
                                >
                                    <BiChevronUp size="18px" />
                                </span>
                                <span
                                    className={`${
                                        event.direction === "desc"
                                            ? "text-dark"
                                            : "text-gray"
                                    }`}
                                >
                                    <BiChevronDown size="18px" />
                                </span>
                            </div>
                        ),
                    }}
                    sortingOrder={["asc", "desc"]}
                    paginationModel={paginationModal}
                    onPaginationModelChange={setPaginationModal}
                    rows={rows}
                    columns={columns}
                    disableColumnFilter
                    disableColumnResize
                    disableColumnMenu
                />
            </div>
        </div>
    );
}
