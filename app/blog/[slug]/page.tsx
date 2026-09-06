import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { blogPosts, getPost } from '@/lib/site'
import { Container } from '@/components/ui-kit'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-motif absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative max-w-3xl py-16 sm:py-20">
          <Link href="/blog" className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="relative mb-10 aspect-video overflow-hidden rounded-3xl border border-border">
              {/* PLACEHOLDER MEDIA: replace with real article image */}
              <Image src={post.image || '/placeholder.svg'} alt={post.title} fill className="object-cover" />
            </div>
          </Reveal>
          <div className="space-y-5">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <p className="text-pretty leading-relaxed text-foreground/90">{para}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
