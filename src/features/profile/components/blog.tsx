import dayjs from "dayjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/data/blog";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Blog() {
  const allPosts = getAllPosts();

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-grid"></div>
          <div className="border-l border-grid"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts
            .slice()
            .sort((a, b) =>
              dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
            )
            .slice(0, 4)
            .map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center">
        <Button asChild>
          <Link href="/blog">
            <span>All Posts</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
