import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button コンポーネントのテスト', () => {
  it('指定したラベルが正しく表示されること', () => {
    render(<Button label="送信する" onClick={() => {}} />);
    expect(screen.getByText('送信する')).toBeInTheDocument();
  });

  it('ボタンをクリックした時に onClick 関数が呼ばれること', () => {
    const handleClick = vi.fn();
    render(<Button label="クリック" onClick={handleClick} />);

    const buttonElement = screen.getByText('クリック');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});