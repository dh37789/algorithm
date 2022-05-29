package src.com.design.pattern.No01AbstractFactory.abstractFactory;

/**
 * AbstractFactory
 * 개념적 제품에 대한 객체를 생성하는 연산으로 인터페이스를 정의합니다.
 */
public interface AbstractFactory {
    Notebook createNotebook();
    Television createTelevision();
}
