import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-gray-800">Not Found</h2>
      <p className="text-gray-600">Could not find requested resource</p>
      <Link href="/">
        <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700">
          Return Home
        </button>
      </Link>
    </div>
  )
}

// export default function NotFound() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h2 className="text-3xl font-bold text-gray-800">Not Found</h2>
//       <p className="text-gray-600">Could not find requested resource</p>
//       <Link href="/">
//         <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700">
//           Return Home
//         </button>
//       </Link>
//     </div>
//   )
// }
