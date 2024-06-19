"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72],{9636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(4848),i=n(8453);const r={},a=void 0,o={id:"Product Features/Reporting & Dashboard/Making Custom Reports on DataStudio",title:"Making Custom Reports on DataStudio",description:"### 10 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Intermediate",source:"@site/docs/3. Product Features/09. Reporting & Dashboard/04. Making Custom Reports on DataStudio.md",sourceDirName:"3. Product Features/09. Reporting & Dashboard",slug:"/Product Features/Reporting & Dashboard/Making Custom Reports on DataStudio",permalink:"/docs/docs/Product Features/Reporting & Dashboard/Making Custom Reports on DataStudio",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Product Features/09. Reporting & Dashboard/04. Making Custom Reports on DataStudio.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capturing Data for Reports & Analytics",permalink:"/docs/docs/Product Features/Reporting & Dashboard/Capturing Data for Reports & Analytics"},next:{title:"Populate Data in Field Views- User Info Report",permalink:"/docs/docs/Product Features/Reporting & Dashboard/Populate Data in Field Views- User Info Report"}},d={},l=[{value:"<strong>10 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Intermediate</code></strong>",id:"10-minute-read-------------------------------------------------------intermediate",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Overview",id:"overview",level:2},{value:"What&#39;s being reported in the current reports?",id:"whats-being-reported-in-the-current-reports",level:2},{value:"Adding template to new report page",id:"adding-template-to-new-report-page",level:2},{value:"Connecting to new data sources from report page",id:"connecting-to-new-data-sources-from-report-page",level:2},{value:"Working with fields, metrics, dimensions and filters",id:"working-with-fields-metrics-dimensions-and-filters",level:2},{value:"Creating calculated fields",id:"creating-calculated-fields",level:2},{value:"Creating Filters",id:"creating-filters",level:2},{value:"Working with grouped data",id:"working-with-grouped-data",level:2},{value:"Creating Views",id:"creating-views",level:2},{value:"Managing views/queries - changing names and data types",id:"managing-viewsqueries---changing-names-and-data-types",level:2},{value:"Styling the graphs",id:"styling-the-graphs",level:2},{value:"Reference Article",id:"reference-article",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.h3,{id:"10-minute-read-------------------------------------------------------intermediate",children:(0,s.jsxs)(t.strong,{children:["10 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,s.jsx)(t.code,{children:"Intermediate"})]})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/Capturing%20Data%20for%20Reports%20&%20Analytics",children:"Capturing data for reports & analytics"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/DataStudio%20Integration%20for%20Visualizations%20&%20Reports",children:"Data Studio Integration"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,s.jsx)("iframe",{width:"800",height:"500",src:"https://www.youtube.com/embed/sTgquLn4VVM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"This document is meant to guide organisations to build custom dashboards either entirely from scratch or build on top of the existing reports provided by Glific."}),"\n",(0,s.jsx)(t.p,{children:"In order to keep things simple, all steps that will be described below will be in reference to the existing reports but they can be extended to build reports or dashboards from scratch as well."}),"\n",(0,s.jsx)(t.p,{children:"The existing reports are built keeping in mind some of the general monitoring and evaluation metrics that organisations would like to keep a track of either on a weekly or daily basis."}),"\n",(0,s.jsx)(t.p,{children:"These reports include information on daily activity status, engagement metrics, frequency of interactions and user information all within different pages of the reports."}),"\n",(0,s.jsx)(t.p,{children:"The reports can be used as is or customised to the organisation\u2019s liking by adding more data sources, blending different data views/tables together in existing or new pages of the report."}),"\n",(0,s.jsx)(t.h2,{id:"whats-being-reported-in-the-current-reports",children:"What's being reported in the current reports?"}),"\n",(0,s.jsx)(t.p,{children:"In the current version of the report (v3.0) you will find the following pages -"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Daily Status :"})," Gives an overall view of the total number of active contacts and messages sent by the users each day. It also gives a breakdown of the number of active contacts and messages by hour in order to evaluate time-based factors that might be impacting engagement"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Flow Reports :"})," This page gives a breakdown of the user engagement per flow. The charts included within this report give an overview of the number of times a user has requested a particular activity or flow or provided feedback on an activity."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Sessions :"})," The sessions page gives total and average number of sessions (flows) initiated by the user. It also gives a breakdown of the frequency of interactions per user, average time spent on flow per user and the average number of messages sent by the user for each flow."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Contact Details :"})," All contact details collected by the organisation can be visualised in this view of the report."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Field Views (User Details) :"})," Additional page to visualise contact details that makes use of a stored procedure in Bigquery meant to unnest all the fields level information that the organisation is collecting in their flows and mapping them back to the contact details ",(0,s.jsx)(t.a,{href:"https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/Capturing%20Data%20for%20Reports%20&%20Analytics",children:"Capturing data for reports & analytics"})]}),"\n",(0,s.jsx)(t.p,{children:"All the reports above can be filtered as per date, time, flow name, flow label (activity/feedback etc.) and contact details."}),"\n",(0,s.jsx)(t.h1,{id:"getting-started-",children:"Getting Started :"}),"\n",(0,s.jsx)(t.h2,{id:"adding-template-to-new-report-page",children:"Adding template to new report page"}),"\n",(0,s.jsxs)(t.p,{children:["Once you have made a copy of the existing reports and made connections to your data sources by following the steps in this document ",(0,s.jsx)(t.a,{href:"https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/DataStudio%20Integration%20for%20Visualizations%20&%20Reports",children:"Integrate DataStudio to create Visualisations & Reports"}),", you are now all set to customise existing pages or add new pages."]}),"\n",(0,s.jsx)(t.p,{children:"In order to add a new page,"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.code,{children:"Pages"})," on the header"]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.code,{children:"New Page"}),"  (you can even duplicate an earlier page by clicking on ",(0,s.jsx)(t.code,{children:"Duplicate Page"})," and customise it as per your requirements)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824732-c2935bcc-de83-4431-ae97-6f25eaf6bb9e.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Rename"})," the report by clicking on the Page (Number) from the header panel and selecting the 3 dots beside the current report name"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212664979-7e02249b-9cd7-4a43-a35b-2393184c8660.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"An empty page will be created without the source template. In order to add the source template -"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Multi-select all the rectangles, texts and filters from the template that you would like to be copied from a previous page"}),"\n",(0,s.jsxs)(t.li,{children:["Right click on the selection and click the ",(0,s.jsx)(t.code,{children:"Make report-level"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666345-2e55e194-283a-4f1f-9bec-03a7a0485c81.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666358-00d05492-60ef-4951-babb-2caf2cbc42b6.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"You are now ready to add data sources and charts to your new report page."}),"\n",(0,s.jsx)(t.h2,{id:"connecting-to-new-data-sources-from-report-page",children:"Connecting to new data sources from report page"}),"\n",(0,s.jsx)(t.p,{children:"Every report page has a pre-selected data source which can be changed. If you want to select a source from  already connected data sources or if you want to include a new custom query or data source from your BigQuery Console -"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.code,{children:"Add Data"})," option available on the header panel"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666415-634ac468-19d6-4fc9-a38f-436e96697088.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"Bigquery"})," connector"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666443-eac9a5ef-5849-45b5-bb25-357dd9452119.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"project"})," that contains your datasets"]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Glific dataset"})]}),"\n",(0,s.jsx)(t.li,{children:"Choose from the list of available data sources"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666464-e996f35a-5483-43b0-b571-bf034771d87a.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"Or you could also -"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Add a dummy chart and then click on ",(0,s.jsx)(t.code,{children:"Edit Data Source"})," (pen icon) in the ",(0,s.jsx)(t.code,{children:"Data Source"})," section of the right data pane"]}),"\n",(0,s.jsx)(t.li,{children:"Select the data source from the list of connected data sources after the BigQuery connector automatically opens to your project"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666479-85559e22-a1d3-4ebf-a9f1-ac67d2fe3977.png",alt:"image"})}),"\n",(0,s.jsx)(t.h2,{id:"working-with-fields-metrics-dimensions-and-filters",children:"Working with fields, metrics, dimensions and filters"}),"\n",(0,s.jsxs)(t.p,{children:["When working with charts, the right data pane gives you options to change ",(0,s.jsx)(t.strong,{children:"dimension"}),", ",(0,s.jsx)(t.strong,{children:"metrics"}),", ",(0,s.jsx)(t.strong,{children:"define custom fields"})," and ",(0,s.jsx)(t.strong,{children:"add filters"})," to organise data in a certain way. Here is a complete breakdown of all the available options -"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Fields :"})," Fields are the columns that appear in your connected dataset"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Date Range Dimension :"})," As the name suggests, this option lets you specify the ",(0,s.jsx)(t.code,{children:"datetime"})," field within your dataset and can be used to plot time-series charts and graphs. Specifying the date dimension also lets the user further filter as per month, week, day, hour and so on"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Dimension :"})," Dimensions describe or categorize your data. Adding dimensions to a chart groups the data by those dimensions. Time, flow name, city, student\u2019s age are all examples of dimensions you could use to group the information in your chart. \xa0Note that any type of data can be a dimension, including a column of unaggregated numbers"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Metrics :"})," Metrics measure your dimensions. A metric is the result of applying an aggregation to a set of values. That aggregation could come from the underlying data set, or be the result of implicitly or explicitly applying an aggregation function, such as ",(0,s.jsx)(t.strong,{children:"COUNT()"}),", ",(0,s.jsx)(t.strong,{children:"SUM()"}),", or ",(0,s.jsx)(t.strong,{children:"AVG()"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note about Dimensions and metrics in your data source :"})," When you connect to your data in Data Studio, you'll see the list of fields along with their default properties, as shown below. ",(0,s.jsx)(t.strong,{children:"Dimensions"})," (unaggregated columns that you can group by) appear as green fields. ",(0,s.jsx)(t.strong,{children:"Metrics"})," (aggregated data) appear as blue fields"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Parameters :"})," Parameters store user-defined data. Unlike dimensions and metrics, which get their information from the underlying data set, parameters get their information from users. Parameters can then be used to customise or personalised your reports and data sources"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Calculated Fields :"})," Calculated fields let you create new fields derived from your data. Calculated fields appear in the field list with ",(0,s.jsx)(t.code,{children:"fx"})," at the end"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Filters :"})," There are two types of filters that can be added to the report, one at a page level, also called as a control and the other at a chart level which is available as an option in the right data panel after a chart is added. Both filters work essentially the same way and can be used to visualise only a portion of the data"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-calculated-fields",children:"Creating calculated fields"}),"\n",(0,s.jsx)(t.p,{children:"In order to create a calculated field -"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click on either dimension or metrics in the right data pane and select ",(0,s.jsx)(t.code,{children:"Create Field"})," at the very bottom of the drop-down list"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666520-632adeaa-6d7b-4fb2-bd16-d3f5dce93e01.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In the formula text box, specify the condition using which you want the new field to be created. The formula takes in all SQL functions. Some examples in which this could be used include ",(0,s.jsx)(t.strong,{children:"HOUR(inserted_at)"})," to extract only the HOUR information from the datetime column or doing a CASE WHEN to specify \u201cMale\u201d or \u201cFemale\u201d instead of a \u201c1\u201d or \u201c2\u201d from the original data source."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666540-f1a6d9b9-15ed-49a4-ae67-e7a85689db4a.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Provide the calculated field with a name and data type and then select the ",(0,s.jsx)(t.code,{children:"Apply"})," button."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:""}),"\n",(0,s.jsx)(t.h2,{id:"creating-filters",children:"Creating Filters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Creating page-level filters :"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select on ",(0,s.jsx)(t.code,{children:"Add a control"})," option from the top header panel"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666575-6ae12151-cb46-4d9a-8f45-fb5605fca8c6.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Select the type of filter you want to add from the page. The available filters include options like sliders to filter numeric data types, checkboxes to select only boolean values or drop down list to filter as per dimensions available in a specific column of the dataset."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666601-56536e26-d721-42fc-9166-589dddcc5246.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Adjust the shape and position of the filter within your report"}),"\n",(0,s.jsxs)(t.li,{children:["Select the column using which the data needs to be filtered from the ",(0,s.jsx)(t.code,{children:"Control Field"})," option available in the right data pane."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/212666646-6655e7fd-5a5c-4d42-8f4b-5a73b1e210bf.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Make adjustments to the ",(0,s.jsx)(t.strong,{children:"metric"}),", ",(0,s.jsx)(t.strong,{children:"order"}),", ",(0,s.jsx)(t.strong,{children:"range"})," etc. as necessary based on the type of filter selected"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Creating chart-level filters"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["After adding a chart, scroll to the ",(0,s.jsx)(t.code,{children:"Filter"})," section of the right data pane."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824772-c360bfb2-1e44-4473-90e6-caac2de4fceb.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.code,{children:"Add a filter"})]}),"\n",(0,s.jsxs)(t.li,{children:["Filters are usually of two types - ",(0,s.jsx)(t.strong,{children:"Include"})," or ",(0,s.jsx)(t.strong,{children:"Exclude"}),". Select whether you want to include or exclude certain dimensions or types of values (NULLs) from your data"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824788-f04d7b28-204b-4bbb-b05e-0697f6862052.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Select the field which has the dimension or value that needs to be filtered"}),"\n",(0,s.jsx)(t.li,{children:"Select a filtering condition. This can include filtering based on partial or full matching with the column value or filtering null values or values that start with a certain value."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824803-c81060a4-c52c-4400-9bed-6b21cb0646a0.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Type in the keywords for which the filtering condition needs to be applied"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"working-with-grouped-data",children:"Working with grouped data"}),"\n",(0,s.jsx)(t.p,{children:"In certain cases, you might be interested in working with averages such as per user per flow average times or with grouped data such as combining contacts and messages tables together and grouping them to visualise the number of messages sent by users."}),"\n",(0,s.jsx)(t.p,{children:"These manipulations are not directly available in the backend tables and might get a little tricky to work with if you are building custom fields since Data Studio does not support group by functions in the formula box for calculated fields."}),"\n",(0,s.jsx)(t.p,{children:"In such cases, it is advisable to either select the table visualisations where you can add multiple grouped dimensions and visualise the number of records for such groupings. For example, if you wish to get the number of flows requested by a user per day, you could -"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Table with Bars"})," chart from the ",(0,s.jsx)(t.code,{children:"Add A Chart"})," option in the top header panel"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824817-e26d4c6e-98b1-4b9f-948e-c9b619ca0029.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Add dimensions for ",(0,s.jsx)(t.code,{children:"Date"})," and ",(0,s.jsx)(t.code,{children:"Phone"})," in the right data pane to create the groupings"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824822-dcce8ae1-c644-48d7-bf54-a43aa19be90a.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"flow_label"})," metric and choose the ",(0,s.jsx)(t.strong,{children:"SUM"})," aggregation to get the total number of activities requested per user per day"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-views",children:"Creating Views"}),"\n",(0,s.jsxs)(t.p,{children:["The other way to deal with averages or with grouped data is to create ",(0,s.jsx)(t.strong,{children:"views"})," from backend tables and add them as data sources within your reports. You can create views directly from Data Studio in the following way"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.code,{children:"Add A Data"})," option in the top header panel"]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"Bigquery"})," connector"]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Custom Query"})," option and then select your ",(0,s.jsx)(t.strong,{children:"project"})," and ",(0,s.jsx)(t.strong,{children:"dataset name"})]}),"\n",(0,s.jsxs)(t.li,{children:["Type or paste your view query in the ",(0,s.jsx)(t.code,{children:"Enter Custom Query"})," text  box"]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.code,{children:"Add"})," after you are done"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The views currently in use include Flat Fields available in your Bigquery Console along with UserSessions and ContactMessages available within Datastudio (Click on ",(0,s.jsx)(t.code,{children:"Resource"})," > ",(0,s.jsx)(t.code,{children:"Manage added data sources"})," in your Datastudio report to view them)"]}),"\n",(0,s.jsx)(t.h2,{id:"managing-viewsqueries---changing-names-and-data-types",children:"Managing views/queries - changing names and data types"}),"\n",(0,s.jsxs)(t.p,{children:["The default name given to a query or a view when it's created is ",(0,s.jsx)(t.strong,{children:"Bigquery"}),". You might want to give this particular view/query a name in order to manage it across multiple pages of the report."]}),"\n",(0,s.jsx)(t.p,{children:"You can also make data type changes after you have created the view/query if you haven't already done so while creating it. In order to make name or data type changes -"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"Resource"})," option from the header panel of Datastudio"]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"Manage Added Data Sources"}),"option"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824837-d2b79c2c-b282-48ff-be37-a0cd7383bb4e.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to the data source that has the name \u201cBigquery\u201d and click on the ",(0,s.jsx)(t.code,{children:"Edit"})," option beside it"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824849-6fba000a-134a-4008-a857-151f370e6bb6.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Double click on the current view/query name at the top of the ",(0,s.jsx)(t.code,{children:"edit"})," box and change the name"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824857-b805e438-81bf-483c-9d40-ac36c5e1cab3.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In order to change the data type, navigate to the field to be changed and select the data type from the drop-down list from either ",(0,s.jsx)(t.strong,{children:"Number"}),", ",(0,s.jsx)(t.strong,{children:"Text"}),", ",(0,s.jsx)(t.strong,{children:"Geolocation"}),", ",(0,s.jsx)(t.strong,{children:"Boolean"})," etc"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824869-b7a0253c-fdca-4ebe-a9dc-f5fcf4f8f57e.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Done"})," button in the top right corner of the editing box after you have made all the changes"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"styling-the-graphs",children:"Styling the graphs"}),"\n",(0,s.jsx)(t.p,{children:"After you are done adding data sources, creating new views, adding graphs etc. it is time to style them as per your report."}),"\n",(0,s.jsxs)(t.p,{children:["Each graph has its own styling criteria. A ",(0,s.jsx)(t.strong,{children:"bar graph"})," may have an option to change the orientation, i.e, vertical or horizontal orientation whereas a ",(0,s.jsx)(t.strong,{children:"pie chart"})," gives you an option to select the number of total slices (if the data was numeric)."]}),"\n",(0,s.jsx)(t.p,{children:"The styling depends on your use-case and there is no hard and fast rule as to how you would like to present the data."}),"\n",(0,s.jsxs)(t.p,{children:["You may however want to adjust the colors of the graphs/charts based on the template colors you are using. This can be done through the ",(0,s.jsx)(t.code,{children:"Color"})," and ",(0,s.jsx)(t.code,{children:"Background and Border"})," sections within the ",(0,s.jsx)(t.code,{children:"Styling"})," tab."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/32592458/220824884-04fb711f-0f1a-4379-8b41-778dfb8a351e.png",alt:"image"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also ",(0,s.jsx)(t.strong,{children:"add"}),"  ",(0,s.jsx)(t.strong,{children:"labels"})," to the chart and adjust the ",(0,s.jsx)(t.strong,{children:"font size"})," and color of the labels. The other thing you might want to try is making text/orientation changes to the legend of the graph. The changes are automatically saved."]}),"\n",(0,s.jsx)(t.p,{children:"Once you are done styling the pages and the graphs, you have your organisation level reports ready to be viewed or shared."}),"\n",(0,s.jsx)(t.h2,{id:"reference-article",children:"Reference Article"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://support.google.com/datastudio/answer/6402048?hl=en",children:"Configure Dimensions and Metrics"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://support.google.com/datastudio/answer/6299685?hl=en",children:"About Calculated Fields"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://support.google.com/datastudio/answer/6291066?hl=en",children:"Working with Filters"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://support.google.com/datastudio/answer/6291062?hl=en",children:"Configure Chart Components"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);