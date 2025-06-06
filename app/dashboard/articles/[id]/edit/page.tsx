import EditArticlePage from '@/components/articles/edit-article-page'
import { prisma } from '@/lib/prisma'
import React from 'react'

type EditArticleParams = {
    params:Promise<{id:string}>
}

const page : React.FC<EditArticleParams> = async ( { params}) => {
    const { id } = await params;
    const article = await prisma.articles.findUnique({
        where: {id}
    })
if(!article) return <h1>Article not found for this {id}</h1>
  return (
    <EditArticlePage article = {article}/>
  )
}

export default page