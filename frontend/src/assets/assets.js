import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import Dentist from './Dentists.jpg'
import Cardiologist from './Cardiologist.png'
import Orthopedic from './Orthopedic.png'
import Hepatologist from './Hepatologist.png'
import Ontology from './Ontology.jpg'
import Psychiatrist  from './Psychiatrist.jpg'
import logo from './Logo_WithoutBg.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.jpeg'
import doc17 from './doc17.jpeg'
import doc18 from './doc18.jpeg'
import doc19 from './doc19.jpeg'
import doc20 from './doc20.jpeg'
import doc21 from './doc21.jpeg'
import doc22 from './doc22.avif'
import doc23 from './doc23.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    doc1,doc2,doc3,doc14,
    Dermatologist,
    Neurologist,
    General_physician,
    Pediatricians,
    Gastroenterologist,
    Cardiologist,
    Orthopedic,
    Ontology,
    Psychiatrist ,
    Hepatologist,
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
    {
        speciality: 'Dentist',
        image: Dentist
    },
    {
        speciality: 'Cardiologist',
        image:   Cardiologist// Add a pic
    },
    {
        speciality: 'Orthopedic',
        image: Orthopedic // Add a pic
    },
    {
        speciality: 'Ontolog',
        image: Ontology // Add a pic
    },
    {
        speciality: 'Psychiatrist',
        image: Psychiatrist // Add a pic
    },
    {
        speciality: 'Hepatologist',
        image: Hepatologist // Add a pic
    }
    
    
    
];


export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 250,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 360,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 230,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 340,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 250,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 250,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 150,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 360,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 230,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 140,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 350,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Harris has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 250,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Evans has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 150,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 260,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia Hill has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 330,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Sophiaj Bennett',
        image: doc16,
        speciality: 'Dentist',
        degree: 'BDS, MDS (Orthodontics)',
        experience: '7 Years',
        about: 'Dr. Sophiaj Bennett is a highly experienced dental surgeon specializing in orthodontics. She is committed to enhancing smiles and promoting long-term oral health using advanced dental care techniques.',
        fees: 450,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Priyesh Mishra',
        image: doc17,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '9 Years',
        about: 'Dr. Priyesh Mishra  has a passion for patient-centered cardiac care and specializes in interventional cardiology. He is known for her clear explanations and empathetic care.',
        fees: 500,
        address: {
            line1: 'Maple Street',
            line2: 'Connaught Place, Delhi'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Aarav Patel',
        image: doc18,
        speciality: 'Orthopedic',
        degree: 'MBBS, MS (Orthopedics)',
        experience: '10 Years',
        about: 'Dr. Aarav Patel specializes in bone and joint disorders, with expertise in joint replacement and sports injuries. He emphasizes rehabilitation and patient education.',
        fees: 460,
        address: {
            line1: 'Orthocare Complex',
            line2: 'MG Road, Mumbai'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Vikram Sinha',
        image: doc19,
        speciality: 'Otologist',
        degree: 'MBBS, MS (ENT)',
        experience: '11 Years',
        about: 'Dr. Vikram Sinha is an otologist specializing in middle ear surgeries and hearing restoration. He has vast experience treating chronic ear infections and balance disorders.',
        fees: 180,
        address: {
            line1: 'Ear & Hearing Clinic',
            line2: 'Bannerghatta Road, Bangalore'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Nihal Kapoor',
        image: doc20,
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '6 Years',
        about: 'Dr. Nihal Kapoor specializes in adult mental health, stress management, and anxiety disorders. He combines modern psychiatry with a compassionate approach.',
        fees: 350,
        address: {
            line1: 'Wellness Point',
            line2: 'Indiranagar, Bangalore'
        }
    },
    {
        _id: 'doc21',
        name: 'Dr. Bhavish Nair',
        image: doc21,
        speciality: 'Hepatologist',
        degree: 'MBBS, DM (Hepatology)',
        experience: '8 Years',
        about: 'Dr. Bhavish Nair specializes in liver diseases including hepatitis, cirrhosis, and fatty liver. He advocates for early intervention and nutritional support.',
        fees: 200,
        address: {
            line1: 'Liver Life Centre',
            line2: 'Nungambakkam, Chennai'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Emily Grant',
        image: doc22,
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '10 Years',
        about: 'Dr. Emily Grant Reed focuses on mood disorders, depression, and adolescent psychiatry. She integrates therapy and medication for holistic recovery.',
        fees: 300,
        address: {
            line1: 'Hope Mental Health Centre',
            line2: 'Brooklyn, New York'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Thomas Reed',
        image: doc23,
        speciality: 'Otologist',
        degree: 'MBBS, MS (ENT)',
        experience: '7 Years',
        about: 'Dr. Thomas Reed is an ear specialist focusing on cochlear implants and vestibular disorders. He is known for her patient-first philosophy and gentle care.',
        fees: 200,
        address: {
            line1: 'Harbor ENT Centre',
            line2: 'Main Street, Sydney'
        }
    }


]