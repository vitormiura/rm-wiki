import Head from 'next/head'
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Character({ data }) {
  const { image, name, gender, location, origin, species, status } = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {name}
        </h1>
        
        <div className="profile">
          <div className="profile-image">
            <img src={image} alt={name} />
          </div>
          <div className="profile-details">
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> { name }
              </li>
              <li>
                <strong>Status:</strong> { status }
              </li>
              <li>
                <strong>Gender:</strong> { gender }
              </li>
              <li>
                <strong>Species:</strong> { species }
              </li>
              <li>
                <strong>Location:</strong> { location?.name }
              </li>
              <li>
                <strong>Originally From:</strong> { origin?.name }
              </li>
            </ul>
          </div>
        </div>

        <p>
          <Link href='/' className='styles.beck'>
            Back to all characters
          </Link>
        </p>

      </main>
    </div>
  )
}
