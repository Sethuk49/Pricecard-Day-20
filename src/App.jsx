
import React from 'react'
import Card from './Card'
function App() {

  let data = [
    {
      plan:"FREE",
      price:"0",
      Users:"Single User",
      isUser:true,
      Storage:"50GB storage",
      isStorage:true,
      Public:"Unlimited Public Projects",
      isPublic:true,
      Community:"Community Access",
      isCommunity:true,
      Private:"Unlimited Private Projects",
      isPrivate:false,
      Support:"Dedicated Phone Support",
      isSupport:false,
      SubDomain:"Free Subdomain",
      isSubDomain:false,
      Reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"Plus",
      price:"9",
      Users:"5 User",
      isUser:true,
      Storage:"50GB storage",
      isStorage:true,
      Public:"Unlimited Public Projects",
      isPublic:true,
      Community:"Community Access",
      isCommunity:true,
      Private:"Unlimited Private Projects",
      isPrivate:true,
      Support:"Dedicated Phone Support",
      isSupport:true,
      SubDomain:"Free Subdomain",
      isSubDomain:true,
      Reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"Pro",
      price:"49",
      Users:"Unlimited User",
      isUser:true,
      Storage:"50GB storage",
      isStorage:true,
      Public:"Unlimited Public Projects",
      isPublic:true,
      Community:"Community Access",
      isCommunity:true,
      Private:"Unlimited Private Projects",
      isPrivate:true,
      Support:"Dedicated Phone Support",
      isSupport:true,
      SubDomain:"Free Subdomain",
      isSubDomain:true,
      Reports:"Monthly Status Reports",
      isReports:true
    },
  ]
  return <>
<section className="pricing py-5">
  <div className="container">
    <div className="row">
{
  data.map((e,i)=>{
    return <Card data={e} key={i}/>
})
}
    </div>
  </div>
</section>
  </>
}

export default App