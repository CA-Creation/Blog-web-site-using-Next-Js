"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from "next/dynamic";
import { FormEvent, startTransition, useActionState, useState } from "react";
import { Button } from '../ui/button';
import "react-quill-new/dist/quill.snow.css";
import { createArticles } from '@/actions/create-article';
import { Articles } from '@prisma/client';
import Image from 'next/image';
import { EditArticle } from '@/actions/edit-article';

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
type EditArticleProps = {
    article : Articles;
};

const EditArticlePage : React.FC<EditArticleProps> = ({article}) => {
    const [content, setContent] = useState(article.content);
    const [formState, action, isPending] = useActionState(EditArticle.bind(null, article.id), {errors:{},});

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("content", content);
        startTransition(() => {
        action(formData);
    });
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Input
                        type="text"
                        name="title"
                        defaultValue={article.title}
                        placeholder="Enter article title"
                    />
                {formState.errors.title && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.title}
                </span>
                )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                        <select
                            id="category"
                            name="category"
                            defaultValue={article.category}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            <option value="">Select Category</option>
                            <option value="technology">Technology</option>
                            <option value="programming">Programming</option>
                            <option value="web-development">Web Development</option>
                        </select>
                        {formState.errors.category && (
                        <span className="font-medium text-sm text-red-500">
                        {formState.errors.category}
                        </span>
                        )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="featuredImage">Featured Image</Label>
                        <Input
                            id="featuredImage"
                            name="featuredImage"
                            type="file"
                            accept="image/*"
                        />
                        <div className='mb-4'>
                            {
                                article.featuredImage && (
                                    <Image
                                        src={article.featuredImage}
                                        alt="Featured Image"
                                        width={200}
                                        height={100}
                                        className='w-48 h-32 object-cover rounded-md'
                                    />  
                                )
                            }
                        </div>
                        
                        {formState.errors.featuredImage && (
                            <span className="font-medium text-sm text-red-500">
                            {formState.errors.featuredImage}
                            </span>
                    )}
                </div>

                
                <div className="space-y-2">
                    <Label>Content</Label>
                        <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        />
                </div>
                {formState.errors.content && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.content[0]}
                </span>
              )}
                <div className='flex justify-end gap-4'>
                    <Button type='submit' variant={'outline'}>Cancel</Button>
                    <Button type='submit' disabled={isPending}>
                        {
                            isPending ? "Loading" : "Edit article"
                        }
                    </Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditArticlePage