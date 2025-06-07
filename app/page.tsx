import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        harrison moncrief stuart
      </h1>
      <p className="mb-4">
        {`my name is harrison. i also go by my middle name, moncrief. i value earnestness above almost everything else.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
