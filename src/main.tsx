import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import { SecondPage } from './SecondPage.tsx'
import { Countries } from './countries/Countries.tsx'
import { Cities } from './countries/Cities.tsx'
import { Info } from './countries/Info.tsx'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import Todolist from './todolist/Todolist.tsx'
import Navbar from './navigation/Navbar.tsx'

const root  = document.getElementById('root');
//always specify an index route
//when creating nesting you need to use <Outlet/> to showcase children
//Structure
//Define path => index => sub paths (each page is original) 
//ELSE defined path + main-element (with outlet) => sub-paths (sub-paths will have main-element content)
//main-element (with <Outlet/>) => sub-paths (all sub-paths will have their own URL with main-element) used mostly for layouts
createRoot(root!).render(
  
    <FluentProvider theme={webDarkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<App/>} />

            <Route path="todolist" element={<Todolist/>}/>

            <Route path="second" element={<SecondPage/>}/>
            
            <Route path="countries"> 
              <Route index element={<Countries/>}/>
              <Route path=":city" element={<Cities/>}/>
              <Route path="info" element={<Info/>}/>
            </Route>  

            <Route path="info" element={<Info/>}>
              <Route index element={<Countries/>}/>
              <Route path="cities" element={<Info/>}/>
            </Route>

            <Route element={<Countries/>}>
              <Route path="bye" element={<Info/>}/>
              <Route path="hello" element={<SecondPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </FluentProvider>
  ,
)
