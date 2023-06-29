import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

describe('Test for componants', ()  => {
  test('Header has correct text', () => {
   
    render(<Header />);
    let header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Home');
  });

  test('Footer has correct text', () => {
    render(<Footer />);
    
    const footerElement = screen.getByTestId('footer');
    
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent('© Emmanuel Gonzales 2023');
  });


});
