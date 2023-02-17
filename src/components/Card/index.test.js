import Card from './';
import { ThemeProvider } from '../../utils/context';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Card', () => {
  test('should render picture and title', async () => {
    render(
      <ThemeProvider>
        <Card title="John Doe" label="Engineer" picture="/myPicture.png" />
      </ThemeProvider>
    );
    ///const picture = screen.getBy;
    const cardPic = screen.getByRole('img');
    const cardTitle = screen.getByText('John Doe');
    expect(cardPic.src).toBe('http://localhost/myPicture.png');

    expect(cardTitle.textContent).toBe(' John Doe ');
  });
  test('Should add ⭐️ around title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Arielle Gautier"
          label="Développeuse fullstack"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    );
    const cardTitle = screen.getByText(/Arielle/i);
    // eslint-disable-next-line testing-library/no-node-access
    const parentNode = cardTitle.closest('div');
    fireEvent.click(parentNode);
    expect(cardTitle.textContent).toBe('⭐️ Arielle Gautier ⭐️');
  });
});
