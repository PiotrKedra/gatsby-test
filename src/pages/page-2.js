import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"

const SecondPage = () => {

  const [dupa, setDupa] = React.useState("dupa is loading...");
  axios.get(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => {
      console.log(res)
      setDupa(res.data.name + ' - ' + res.data.email)
    })
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>{dupa}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
