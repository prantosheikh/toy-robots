
// const Toys = ({ toy }) => {
//     console.log(toy);


//     const {
//       availableQuantity,
//       email,
//       exampleRequired,
//       photoURL,
//       price,
//       rating,
//       subToyCategory,
//       toyName,
//       youName,
//       _id,
//     } = toy || {};

  
//     return (
//       <div className="overflow-x-auto w-full">
//         <tbody className="table w-full">
//           {/* row 1 */}
//           <tr>
//             <td>
//               <div className="flex items-center space-x-3">
//                 <div className="avatar">
//                   <div className="mask mask-squircle w-12 h-12">
//                     <img
//                       src="/tailwind-css-component-profile-2@56w.png"
//                       alt="Avatar Tailwind CSS Component"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="font-bold">{toyName}</div>
//                 </div>
//               </div>
//             </td>

//             <td>
//               {subToyCategory.map((subToyCategorys, i) => (
//                 <span  key={i} className="p-2">{subToyCategorys.value}</span >
//               ))}
//             </td>

//             <td>Purple</td>
//             <th>
//               <th>
//                 <label htmlFor="my-modal-5" className="btn btn-xs">
//                   Details
//                 </label>
//               </th>
//             </th>
//           </tr>
//         </tbody>

//         <input type="checkbox" id="my-modal-5" className="modal-toggle" />
//         <div className="modal">
//           <div className="modal-box w-11/12 max-w-5xl">
//             <h3 className="font-bold text-lg">
//               Congratulations random Internet user!
//             </h3>
//             <p className="py-4">
//               You ve been selected for a chance to get one year of subscription
//               to use Wikipedia for free!
//             </p>
//             <div className="modal-action">
//               <label htmlFor="my-modal-5" className="btn">
//                 Yay!
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Toys;