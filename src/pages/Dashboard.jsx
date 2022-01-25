import React from 'react'
import { Link } from 'react-router-dom'

import Chart from "react-apexcharts"

import StatusCard from '../components/statuscard/StatusCard'
import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'


const chartOptions = {
    series:[{
        name:'Online Customers',
        data : [40,70,20,90,36,80,30,91,60,70]
    },
    {
        name:'Online Store',
        data : [40,30,70,80,40,16,40,20,51,10]
    }],
    options: {
        color : ['#6ab04c','#2980b9'],
        chart : {
            background : 'transparent'
        },
        dataLabels : {
            enabled : false
        },
        stroke : {
            curve : 'smooth'
        },
        xsxis : {
            categories : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
        },
        legend : {
            position : 'top'
        },
        grid : {
            show : false
        }
    }
}

const topCustomers = {
    head : [
        'user',
        'total orders',
        'total spending'
    ],
    body : [
        {
            "username" : "jhon doe",
            "order" : "490",
            "price" : "$12,251"
        },
        {
            "username" : "frank iva",
            "order" : "250",
            "price" : "$15,870"
        },
        {
            "username" : "anthony baker",
            "order" : "120",
            "price" : "$10,840"
        },
        {
            "username" : "frank iva",
            "order" : "110",
            "price" : "$9,251"
        },
        {
            "username" : "anthony baker",
            "order" : "80",
            "price" : "$8,840"
        },
        {
            "username" : "john doe",
            "order" : "70",
            "price" : "$7,650"
        }
    ]
}

const renderCustomerHead = (item,index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item,index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)



const latest = {
    header : [
        'order id',
        'user',
        'total price',
        'date',
        'status'
    ],
    body : [
        {
            'id':'#OD1711',
            'user':'john doe',
            'date' : '17 jun 2021',
            'prise' : '$900',
            'status' : 'shopping'
        },
        {
            'id':'#OD1712',
            'user':'frank iva',
            'date' : '1 jun 2021',
            'prise' : '$400',
            'status' : 'paid'
        },
        {
            'id':'#OD1713',
            'user':'anthony baker',
            'date' : '27 jun 2021',
            'prise' : '$200',
            'status' : 'pending'
        },
        {
            'id':'#OD1714',
            'user':'john doe',
            'date' : '17 jun 2021',
            'prise' : '$900',
            'status' : 'shopping'
        },
        {
            'id':'#OD1715',
            'user':'frank iva',
            'date' : '18 jun 2021',
            'prise' : '$400',
            'status' : 'refund'
        },
        {
            'id':'#OD1716',
            'user':'anthony baker',
            'date' : '16 jun 2021',
            'prise' : '$500',
            'status' : 'pending'
        },
    ]
}

const orderStatus = {
    'shopping' : 'primary',
    'pending' : 'warning',
    'paid' : 'success',
    'refund' : 'danger'
}

const renderOrderHead = (item,index)=>(
    <th key={index}>{item}</th>
)

const renderOrderBody = (item,index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.prise}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item,index)=>(
                                <div className="col-6" key={index}>
                                    {/* Status Card Here */}
                                    {/* {item.title} */}
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart 
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-5">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            {/* table */}
                            <Table 
                                headData={topCustomers.head}
                                bodyData={topCustomers.body}
                                renderHead={(item,index)=>renderCustomerHead(item,index)}
                                renderBody={(item,index)=>renderCustomerBody(item,index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/customers'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest order</h3>
                        </div>
                        <div className="card__body">
                            {/* table */}
                            <Table 
                                headData={latest.header}
                                bodyData={latest.body}
                                renderHead={(item,index)=>renderOrderHead(item,index)}
                                renderBody={(item,index)=>renderOrderBody(item,index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/orders'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
