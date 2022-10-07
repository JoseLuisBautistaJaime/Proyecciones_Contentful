import React from "react";
import {render,cleanup,waitFor}from '@testing-library/react'
import mockAxios  from 'axios'
import { Helps } from '../Pages/Help/Helps';

afterEach(cleanup)
describe('Helps tests',() => {   
    test('Helps with content', async () => {
        const mockData =
        {
            data: { 
                ayudaCollection: {
                    items:[
                        {
                            title:"some title",
                            permalink:"www.example.com",
                           
                        }
            ]} } 
        }
        mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData }))
       
        const { getByText} = render(<Helps />);                
        expect(getByText(/Cargando.../i).textContent).toBe("Cargando...")        
         await waitFor(async () => {
            expect(getByText(/title/i).textContent).toContain("some title")
          })      
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        
       })
       test('Helps without content', async () => {
        const mockData =
        {
            data: { 
                ayudaCollection: {
                    items:null
                } } 
        }
        mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData }))       
        const { getByText } = render(<Helps/>);                
        expect(getByText(/Cargando.../i).textContent).toBe("Cargando...")                     
         await waitFor(async () => {
            expect(getByText(/Cargando.../i).textContent).toBe("Cargando...")
          })      
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        
       })
})
