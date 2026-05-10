import React from 'react';

export default async function BlogItem({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  return <div>BLOG POST ID: {blogId}</div>;
}
